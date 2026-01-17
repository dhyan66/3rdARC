"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email address"
        className="w-full rounded-full border border-border/70 bg-transparent px-4 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2"
      />
      <button
        type="submit"
        className="rounded-full border border-border/80 px-5 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition hover:border-accent hover:text-accent"
      >
        Join
      </button>
      {status === "success" && (
        <span className="text-xs uppercase tracking-[0.2em] text-accent">
          Welcome aboard.
        </span>
      )}
      {status === "error" && (
        <span className="text-xs uppercase tracking-[0.2em] text-red-500">
          Enter a valid email.
        </span>
      )}
    </form>
  );
}
