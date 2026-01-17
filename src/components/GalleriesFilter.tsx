"use client";

import { useMemo, useState } from "react";
import GalleryCard from "@/components/GalleryCard";
import { Gallery } from "@/content/galleries";

type GalleriesFilterProps = {
  galleries: Gallery[];
  tags: string[];
};

export default function GalleriesFilter({
  galleries,
  tags,
}: GalleriesFilterProps) {
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = useMemo(() => {
    if (activeTag === "All") return galleries;
    return galleries.filter((gallery) => gallery.tags.includes(activeTag));
  }, [activeTag, galleries]);

  return (
    <div className="space-y-10">
      <div className="flex flex-wrap gap-3">
        {["All", ...tags].map((tag) => (
          <button
            key={tag}
            type="button"
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition ${
              activeTag === tag
                ? "border-accent text-foreground"
                : "border-border/70 text-muted hover:text-foreground"
            }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((gallery) => (
          <GalleryCard key={gallery.slug} gallery={gallery} />
        ))}
      </div>
    </div>
  );
}
