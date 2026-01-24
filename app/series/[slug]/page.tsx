import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PhotoStrip from "@/src/components/PhotoStrip";
import { seriesList } from "@/src/content/series";
import { site } from "@/src/content/site";

export const dynamicParams = false;

export async function generateStaticParams() {
  return seriesList.map((series) => ({ slug: series.slug }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const series = seriesList.find((item) => item.slug === params.slug);
  if (!series) {
    return {
      title: site.name,
      description: site.tagline ?? "Photographer portfolio"
    };
  }
  return {
    title: `${series.title} — ${site.name}`,
    description: series.subtitle ?? site.tagline
  };
}

export default function SeriesPage({
  params
}: {
  params: { slug: string };
}) {
  const series = seriesList.find((item) => item.slug === params.slug);

  if (!series) {
    notFound();
  }

  return (
    <section className="pb-12">
      <div className="max-w-2xl space-y-2">
        <h1 className="font-display text-3xl font-light md:text-4xl">
          {series.title}
        </h1>
        {series.subtitle ? (
          <p className="text-sm text-ink/70">{series.subtitle}</p>
        ) : null}
      </div>
      <PhotoStrip photos={series.photos} />
    </section>
  );
}
