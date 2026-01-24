import type { Metadata } from "next";
import Image from "next/image";
import SectionBlock from "@/src/components/SectionBlock";
import { about } from "@/src/content/about";
import { site } from "@/src/content/site";

export const metadata: Metadata = {
  title: `About — ${site.name}`,
  description: about.sections[0]?.body[0] ?? site.tagline
};

export default function AboutPage() {
  return (
    <div className="pb-12">
      <section className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
        <div className="space-y-10">
          {about.sections.map((section) => (
            <SectionBlock
              key={section.title}
              title={section.title}
              body={section.body}
            />
          ))}
        </div>
        <div className="relative h-[420px] overflow-hidden rounded-[999px] bg-ink/10 shadow-soft md:h-[520px]">
          <Image
            src={about.portrait.src}
            alt={about.portrait.alt}
            fill
            sizes="(min-width: 1024px) 35vw, 80vw"
            className="object-cover"
          />
        </div>
      </section>

      <section className="mt-16 grid gap-10 lg:grid-cols-2">
        {about.lists.map((list) => (
          <div key={list.title} className="space-y-4">
            <h3 className="font-display text-xl font-light">{list.title}</h3>
            <ul className="space-y-2 text-sm text-ink/70">
              {list.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-ink/10 bg-white/40 p-8">
        <h3 className="font-display text-2xl font-light">{about.cta.title}</h3>
        <p className="mt-3 max-w-2xl text-sm text-ink/70">{about.cta.body}</p>
        {about.cta.emailLabel ? (
          <a
            className="mt-6 inline-flex text-sm text-ink underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40"
            href={`mailto:${about.cta.emailLabel}`}
          >
            {about.cta.emailLabel}
          </a>
        ) : null}
      </section>
    </div>
  );
}
