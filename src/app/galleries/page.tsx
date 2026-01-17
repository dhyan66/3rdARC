import type { Metadata } from "next";
import GalleriesFilter from "@/components/GalleriesFilter";
import { galleries, galleryTags } from "@/content/galleries";

export const metadata: Metadata = {
  title: "Galleries",
  description: "Curated photography galleries spanning editorial and travel work.",
};

export default function GalleriesPage() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">Galleries</p>
        <h1 className="font-serif text-4xl text-foreground">
          Bodies of work and visual essays
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Each series is built slowly, guided by place, pacing, and a desire to
          linger inside the frame.
        </p>
      </header>
      <GalleriesFilter galleries={galleries} tags={galleryTags} />
    </div>
  );
}
