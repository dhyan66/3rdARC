"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/src/content/site";

const navHref = (slug: string) => (slug === "about" ? "/about" : `/series/${slug}`);

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full px-6 pb-10 pt-12 md:px-12">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-6">
          <div className="space-y-2">
            <Link
              href="/"
              className="font-display text-4xl font-light tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
            >
              {site.name}
            </Link>
            {site.tagline ? (
              <p className="max-w-md text-sm text-ink/70">{site.tagline}</p>
            ) : null}
          </div>
          <nav aria-label="Primary" className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {site.nav.map((item) => {
              const href = navHref(item.slug);
              const isActive = pathname === href;
              return (
                <Link
                  key={item.slug}
                  href={href}
                  aria-current={isActive ? "page" : undefined}
                  className={`transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 ${
                    isActive ? "text-ink" : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
        <div className="text-sm text-ink/70">
          <div className="flex flex-col gap-1">
            <a
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
              href={`mailto:${site.contact.email}`}
            >
              {site.contact.email}
            </a>
            {site.contact.phone ? <span>{site.contact.phone}</span> : null}
            {site.contact.instagram ? <span>{site.contact.instagram}</span> : null}
          </div>
        </div>
      </div>
    </header>
  );
}
