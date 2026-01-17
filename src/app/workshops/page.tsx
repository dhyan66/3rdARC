import type { Metadata } from "next";
import WorkshopCard from "@/components/WorkshopCard";
import { workshops } from "@/content/workshops";

export const metadata: Metadata = {
  title: "Workshops",
  description: "Small-group photography workshops and studio intensives.",
};

export default function WorkshopsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">
          Workshops
        </p>
        <h1 className="font-serif text-4xl text-foreground">
          Immersive workshops with editorial focus
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Multi-day experiences focused on concept development, lighting, and
          editing discipline. Group sizes remain small for deep feedback.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-2">
        {workshops.map((workshop) => (
          <WorkshopCard key={workshop.slug} workshop={workshop} />
        ))}
      </div>
    </div>
  );
}
