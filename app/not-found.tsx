import Link from "next/link";
import { site } from "@/src/content/site";

export default function NotFound() {
  return (
    <section className="pb-16">
      <div className="space-y-4">
        <Link
          href="/"
          className="font-display text-3xl font-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
        >
          {site.name}
        </Link>
        {site.tagline ? (
          <p className="text-sm text-ink/70">{site.tagline}</p>
        ) : null}
        <div className="text-sm text-ink/70">
          <a
            className="underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
            href={`mailto:${site.contact.email}`}
          >
            {site.contact.email}
          </a>
        </div>
      </div>
    </section>
  );
}
