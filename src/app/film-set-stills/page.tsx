import type { Metadata } from "next";
import FilmSetStillsClient from "@/components/FilmSetStillsClient";
import { filmSetStills } from "@/content/filmSetStills";

export const metadata: Metadata = {
  title: "Film Set Stills",
  description:
    "Unit stills and production photography for narrative and commercial film sets.",
};

export default function FilmSetStillsPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">
          Film set stills
        </p>
        <h1 className="font-serif text-4xl text-foreground">
          Narrative stills for film and production
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Behind-the-scenes and unit coverage with a focus on story continuity,
          character detail, and quiet atmosphere.
        </p>
      </header>
      <FilmSetStillsClient productions={filmSetStills} />
    </div>
  );
}
