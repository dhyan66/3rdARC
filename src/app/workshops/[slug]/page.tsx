import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWorkshopBySlug, workshops } from "@/content/workshops";
import { formatCurrency } from "@/lib/utils";

type WorkshopPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return workshops.map((workshop) => ({ slug: workshop.slug }));
}

export async function generateMetadata({
  params,
}: WorkshopPageProps): Promise<Metadata> {
  const workshop = getWorkshopBySlug(params.slug);
  if (!workshop) return {};
  return {
    title: workshop.title,
    description: workshop.overview,
  };
}

export default function WorkshopDetailPage({ params }: WorkshopPageProps) {
  const workshop = getWorkshopBySlug(params.slug);

  if (!workshop) {
    notFound();
  }

  const soldOut = workshop.status === "Sold Out";

  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">
          {workshop.dates} · {workshop.location}
        </p>
        <h1 className="font-serif text-4xl text-foreground">
          {workshop.title}
        </h1>
        <p className="max-w-2xl text-sm text-muted">{workshop.overview}</p>
        <div className="flex flex-wrap gap-4 text-sm text-muted">
          <span>{formatCurrency(workshop.price)}</span>
          <span>{workshop.capacity} seats</span>
          <span>{workshop.status}</span>
        </div>
        <div className="flex flex-wrap gap-4">
          <Link
            href={workshop.payInFullUrl}
            className={`rounded-full border px-6 py-2 text-xs uppercase tracking-[0.2em] ${
              soldOut
                ? "pointer-events-none border-border/60 text-muted"
                : "border-foreground text-foreground hover:border-accent hover:text-accent"
            }`}
          >
            Pay in full
          </Link>
          <Link
            href={workshop.depositUrl}
            className={`rounded-full border px-6 py-2 text-xs uppercase tracking-[0.2em] ${
              soldOut
                ? "pointer-events-none border-border/60 text-muted"
                : "border-foreground text-foreground hover:border-accent hover:text-accent"
            }`}
          >
            Pay deposit ({formatCurrency(workshop.depositAmount)})
          </Link>
          {soldOut && (
            <span className="text-xs uppercase tracking-[0.2em] text-muted">
              Sold out · Join the waitlist by contacting us.
            </span>
          )}
        </div>
      </header>

      <section className="grid gap-8 rounded-3xl border border-border/70 bg-card/70 p-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Inclusions
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            {workshop.inclusions.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>
        <div className="grid gap-6">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            Itinerary
          </p>
          {workshop.itinerarySections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h2 className="font-serif text-2xl text-foreground">
                {section.title}
              </h2>
              <p className="text-sm text-muted">{section.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">FAQ</p>
        <div className="grid gap-4">
          {workshop.faq.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-border/70 bg-card/70 p-6"
            >
              <h3 className="font-serif text-xl text-foreground">
                {item.question}
              </h3>
              <p className="mt-2 text-sm text-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
