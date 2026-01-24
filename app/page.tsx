import type { Metadata } from "next";
import PhotoStrip from "@/src/components/PhotoStrip";
import { site } from "@/src/content/site";
import { seriesList } from "@/src/content/series";

const defaultSeries = seriesList.find(
  (series) => series.slug === site.defaultSeriesSlug
);

export const metadata: Metadata = {
  title: site.name,
  description: site.tagline ?? "Photographer portfolio"
};

export default function HomePage() {
  if (!defaultSeries) {
    return null;
  }

  return (
    <section className="pb-12">
      <div className="max-w-2xl space-y-2">
        <h1 className="font-display text-3xl font-light md:text-4xl">
          {defaultSeries.title}
        </h1>
        {defaultSeries.subtitle ? (
          <p className="text-sm text-ink/70">{defaultSeries.subtitle}</p>
        ) : null}
      </div>
      <PhotoStrip photos={defaultSeries.photos} />
    </section>
  );
}
