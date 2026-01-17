import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media",
  description: "Press, interviews, and select features.",
};

const features = [
  {
    outlet: "Kinfolk Studio Notes",
    title: "Quiet Portraiture in the Atlantic",
    year: "2024",
  },
  {
    outlet: "Frame & Field",
    title: "Designing Workshops With Intention",
    year: "2023",
  },
  {
    outlet: "Visura Editorial",
    title: "Studio Light as Narrative Language",
    year: "2022",
  },
];

export default function MediaPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Media</p>
        <h1 className="font-serif text-4xl text-foreground">
          Press and selected features
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Highlights from interviews, exhibitions, and editorial collaborations
          featuring Arc Gallery Studio.
        </p>
      </header>
      <div className="grid gap-6">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-card/70 p-6 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted">
                {feature.outlet}
              </p>
              <h2 className="font-serif text-2xl text-foreground">
                {feature.title}
              </h2>
            </div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted">
              {feature.year}
            </span>
          </article>
        ))}
      </div>
    </div>
  );
}
