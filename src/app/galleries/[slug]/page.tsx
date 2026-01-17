import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GalleryDetailClient from "@/components/GalleryDetailClient";
import { galleries, getGalleryBySlug } from "@/content/galleries";

type GalleryPageProps = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return galleries.map((gallery) => ({ slug: gallery.slug }));
}

export async function generateMetadata({
  params,
}: GalleryPageProps): Promise<Metadata> {
  const { slug } = params;
  const gallery = getGalleryBySlug(slug);
  if (!gallery) return {};
  return {
    title: gallery.title,
    description: gallery.story,
    openGraph: {
      title: gallery.title,
      description: gallery.story,
      images: [gallery.cover],
    },
  };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { slug } = params;
  const gallery = getGalleryBySlug(slug);

  if (!gallery) {
    notFound();
  }

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-10">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">
          {gallery.location} · {gallery.year}
        </p>
        <h1 className="font-serif text-4xl text-foreground">{gallery.title}</h1>
        <p className="max-w-2xl text-sm text-muted">{gallery.story}</p>
        <div className="flex flex-wrap gap-3">
          {gallery.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border/70 px-4 py-2 text-xs uppercase tracking-[0.25em] text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href="/galleries"
          className="inline-flex rounded-full border border-border/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition hover:border-accent hover:text-accent"
        >
          Back to galleries
        </Link>
      </header>
      <GalleryDetailClient gallery={gallery} />
    </div>
  );
}
