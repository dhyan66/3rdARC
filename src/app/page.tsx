import Link from "next/link";
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
    <div className="flex flex-col gap-20">
      <section
        className="relative min-h-[70vh] w-full overflow-hidden bg-foreground text-background"
        style={{
          backgroundImage:
            "linear-gradient(120deg, rgba(8, 16, 12, 0.75), rgba(8, 16, 12, 0.2)), url('/images/founders-hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,180,120,0.35),transparent_55%)]" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-end gap-6 px-6 pb-10 pt-16 sm:px-10 lg:px-12">
          <p className="text-xs uppercase tracking-[0.4em] text-background/90">
            3rd Arc Productions - Founders
          </p>
          <h1 className="max-w-2xl font-serif text-4xl text-background sm:text-5xl lg:text-6xl">
            Stories built in the wild, shaped in the studio.
          </h1>
          <p className="max-w-xl text-base text-background/90 sm:text-lg">
            The founding team documents the spaces between adventure and
            atmosphere. We craft cinematic imagery rooted in place, process, and
            people.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/galleries"
              className="rounded-full border border-background/60 px-6 py-3 text-xs uppercase tracking-[0.2em] text-background transition hover:border-accent hover:text-accent"
            >
              View galleries
            </Link>
            <Link
              href="/workshops"
              className="rounded-full border border-transparent bg-background px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition hover:bg-background/80"
            >
              Workshops
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 sm:px-10 lg:px-12">
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
    </div>
  );
}
