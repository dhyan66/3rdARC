import { NextResponse } from "next/server";
import { z } from "zod";
import { promises as fs } from "fs";
import path from "path";

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
  turnstileToken: z.string().min(1),
});

const rateLimitStore = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

async function verifyTurnstile(token: string, ip: string | null) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    return { success: false, error: "Missing Turnstile secret key." };
  }
  const formData = new URLSearchParams();
  formData.append("secret", secret);
  formData.append("response", token);
  if (ip) formData.append("remoteip", ip);

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: formData,
    },
  );
  const data = await response.json();
  if (!data.success) {
    return { success: false, error: "Turnstile verification failed." };
  }
  return { success: true };
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const now = Date.now();
  const current = rateLimitStore.get(ip);
  if (!current || current.resetAt < now) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  } else if (current.count >= RATE_LIMIT) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  } else {
    current.count += 1;
  }

  const formData = await request.formData();
  const payload = {
    name: String(formData.get("name") ?? ""),
    email: String(formData.get("email") ?? ""),
    subject: String(formData.get("subject") ?? ""),
    message: String(formData.get("message") ?? ""),
    turnstileToken: String(formData.get("cf-turnstile-response") ?? ""),
  };

  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please complete all required fields." },
      { status: 400 },
    );
  }

  const verification = await verifyTurnstile(parsed.data.turnstileToken, ip);
  if (!verification.success) {
    return NextResponse.json({ error: verification.error }, { status: 400 });
  }

  const record = {
    name: parsed.data.name,
    email: parsed.data.email,
    subject: parsed.data.subject,
    message: parsed.data.message,
    createdAt: new Date().toISOString(),
    ip,
  };

  console.log("Contact submission:", record);

  const dataDir = path.join(process.cwd(), ".data");
  await fs.mkdir(dataDir, { recursive: true });
  await fs.appendFile(
    path.join(dataDir, "contacts.jsonl"),
    `${JSON.stringify(record)}\n`,
    "utf8",
  );

  return NextResponse.json({ ok: true });
}
