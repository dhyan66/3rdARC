import Link from "next/link";
import HeroRotator from "@/components/HeroRotator";
import GalleryCard from "@/components/GalleryCard";
import NewsletterForm from "@/components/NewsletterForm";
import WorkshopCard from "@/components/WorkshopCard";
import { galleries } from "@/content/galleries";
import { workshops } from "@/content/workshops";

export default function Home() {
  const featuredGalleries = galleries.filter((gallery) => gallery.featured);
  const previewGalleries = galleries.slice(0, 4);
  const upcomingWorkshops = workshops.slice(0, 2);

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-20">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">
            Photography studio · Editorial narratives
          </p>
          <h1 className="font-serif text-4xl text-foreground sm:text-5xl lg:text-6xl">
            Arc Gallery Studio
          </h1>
          <p className="max-w-xl text-lg text-muted">
            A portrait and landscape practice shaped by quiet light, tactile
            compositions, and intentional pacing. Based between Berlin and the
            Atlantic coast.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/galleries"
              className="rounded-full border border-border/80 px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition hover:border-accent hover:text-accent"
            >
              View galleries
            </Link>
            <Link
              href="/workshops"
              className="rounded-full border border-transparent bg-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-background transition hover:bg-foreground/80"
            >
              Workshops
            </Link>
          </div>
        </div>
        <HeroRotator
          images={featuredGalleries.map((gallery) => ({
            src: gallery.cover,
            alt: gallery.title,
          }))}
        />
      </section>

      <section className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">
            Featured gallery
          </p>
          <h2 className="font-serif text-3xl text-foreground">
            {featuredGalleries[0]?.title}
          </h2>
          <p className="text-sm text-muted">
            {featuredGalleries[0]?.story}
          </p>
          <Link
            href={`/galleries/${featuredGalleries[0]?.slug}`}
            className="inline-flex rounded-full border border-border/80 px-5 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition hover:border-accent hover:text-accent"
          >
            Enter gallery
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {previewGalleries.map((gallery) => (
            <GalleryCard key={gallery.slug} gallery={gallery} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-border/70 bg-surface p-8 md:grid-cols-[1.2fr_1fr] md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">
            Workshops
          </p>
          <h2 className="font-serif text-3xl text-foreground">
            Upcoming field labs & studio intensives
          </h2>
          <p className="text-sm text-muted">
            Small group experiences focused on editorial storytelling, lighting,
            and sequencing. Limited seats for deeper critique.
          </p>
        </div>
        <div className="grid gap-6">
          {upcomingWorkshops.map((workshop) => (
            <WorkshopCard key={workshop.slug} workshop={workshop} />
          ))}
        </div>
      </section>

      <section className="grid gap-8 rounded-3xl border border-border/70 bg-card/70 p-8 md:grid-cols-[1fr_1.2fr] md:items-center">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">
            Stay close
          </p>
          <h2 className="font-serif text-3xl text-foreground">
            A slow newsletter for curious photographers
          </h2>
          <p className="text-sm text-muted">
            Receive a monthly note with new series, workshop dates, and behind
            the scenes notes. No spam, just the work.
          </p>
        </div>
        <NewsletterForm />
      </section>
    </div>
  );
}
