import Link from "next/link";

const footerLinks = [
  { label: "Instagram", href: "#" },
  { label: "Vimeo", href: "#" },
  { label: "Behance", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/80 bg-background/80 px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-xl text-foreground">
            Arc Gallery Studio
          </p>
          <p className="mt-3 max-w-sm text-sm text-muted">
            Image-led narratives, slow travel diaries, and tactile workshops
            designed for photographers who seek atmosphere over spectacle.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            Follow
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-foreground">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="transition hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            Newsletter
          </p>
          <p className="mt-3 text-sm text-muted">
            Monthly dispatches with new galleries, workshop dates, and
            behind-the-scenes notes.
          </p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-full border border-border/80 bg-transparent px-4 py-2 text-sm text-foreground outline-none ring-accent/40 focus:ring-2"
            />
            <button
              type="button"
              className="rounded-full border border-border/80 px-5 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition hover:border-accent hover:text-accent"
            >
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-border/70 pt-6 text-xs uppercase tracking-[0.2em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <span>© {year} Arc Gallery Studio. All rights reserved.</span>
        <span>Berlin · Lisbon · Reykjavik</span>
      </div>
    </footer>
  );
}
