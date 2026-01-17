"use client";

import { useState } from "react";
import Script from "next/script";

type ContactFormProps = {
  siteKey: string | undefined;
};

export default function ContactForm({ siteKey }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setMessage("");
    const formData = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error ?? "Something went wrong.");
      }
      setStatus("success");
      setMessage("Message delivered. We will reply soon.");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error ? error.message : "Submission failed.",
      );
    }
  };

  return (
    <div className="space-y-6">
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      />
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 rounded-2xl border border-border/70 bg-card/70 p-6"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-muted">
            Name
            <input
              type="text"
              name="name"
              required
              className="w-full rounded-xl border border-border/70 bg-transparent px-4 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2"
            />
          </label>
          <label className="space-y-2 text-sm text-muted">
            Email
            <input
              type="email"
              name="email"
              required
              className="w-full rounded-xl border border-border/70 bg-transparent px-4 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2"
            />
          </label>
        </div>
        <label className="space-y-2 text-sm text-muted">
          Subject
          <input
            type="text"
            name="subject"
            required
            className="w-full rounded-xl border border-border/70 bg-transparent px-4 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2"
          />
        </label>
        <label className="space-y-2 text-sm text-muted">
          Message
          <textarea
            name="message"
            rows={6}
            required
            className="w-full rounded-xl border border-border/70 bg-transparent px-4 py-3 text-sm text-foreground outline-none ring-accent/40 focus:ring-2"
          />
        </label>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="min-h-[65px]">
            {siteKey ? (
              <div className="cf-turnstile" data-sitekey={siteKey} />
            ) : (
              <p className="text-xs uppercase tracking-[0.2em] text-muted">
                Turnstile site key missing.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="rounded-full border border-border/70 px-6 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition hover:border-accent hover:text-accent"
          >
            Send message
          </button>
        </div>
      </form>
      {message && (
        <div
          className={`rounded-full border px-5 py-3 text-xs uppercase tracking-[0.2em] ${
            status === "success"
              ? "border-accent text-accent"
              : "border-red-400 text-red-500"
          }`}
          role="status"
        >
          {message}
        </div>
      )}
    </div>
  );
}
