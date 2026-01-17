import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Arc Gallery Studio for collaborations or workshops.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Contact</p>
        <h1 className="font-serif text-4xl text-foreground">
          Let’s plan the next story
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Share your project scope, location, and timing. We reply within 48
          hours with availability and next steps.
        </p>
      </header>
      <ContactForm siteKey={process.env.TURNSTILE_SITE_KEY} />
    </div>
  );
}
