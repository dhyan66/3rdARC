import Link from "next/link";
import { Workshop } from "@/content/workshops";
import { formatCurrency } from "@/lib/utils";

type WorkshopCardProps = {
  workshop: Workshop;
};

export default function WorkshopCard({ workshop }: WorkshopCardProps) {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-border/70 bg-card/70 p-6">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-muted">
        <span>{workshop.dates}</span>
        <span
          className={`rounded-full border px-3 py-1 ${
            workshop.status === "Available"
              ? "border-accent text-accent"
              : "border-border/70 text-muted"
          }`}
        >
          {workshop.status}
        </span>
      </div>
      <div>
        <h3 className="font-serif text-2xl text-foreground">
          {workshop.title}
        </h3>
        <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted">
          {workshop.location}
        </p>
      </div>
      <div className="flex items-center justify-between text-sm text-muted">
        <span>{formatCurrency(workshop.price)}</span>
        <span>{workshop.capacity} seats</span>
      </div>
      <Link
        href={`/workshops/${workshop.slug}`}
        className="rounded-full border border-border/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition hover:border-accent hover:text-accent"
      >
        View details
      </Link>
    </article>
  );
}
