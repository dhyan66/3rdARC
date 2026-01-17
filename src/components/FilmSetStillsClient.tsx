"use client";

import { useMemo, useState } from "react";
import FilmSetCard from "@/components/FilmSetCard";
import Lightbox from "@/components/Lightbox";
import { FilmSetStill } from "@/content/filmSetStills";

type FilmSetStillsClientProps = {
  productions: FilmSetStill[];
};

export default function FilmSetStillsClient({
  productions,
}: FilmSetStillsClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<FilmSetStill["stills"]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const allStills = useMemo(
    () => productions.flatMap((production) => production.stills),
    [productions],
  );

  const handleViewStills = (production: FilmSetStill) => {
    setActiveImages(production.stills);
    setActiveIndex(0);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="grid gap-8">
        {productions.map((production) => (
          <FilmSetCard
            key={production.title}
            production={production}
            onViewStills={() => handleViewStills(production)}
          />
        ))}
      </div>
      <Lightbox
        images={activeImages.length ? activeImages : allStills}
        isOpen={lightboxOpen}
        initialIndex={activeIndex}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
