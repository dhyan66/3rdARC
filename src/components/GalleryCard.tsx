import Image from "next/image";
import Link from "next/link";
import { Gallery } from "@/content/galleries";

type GalleryCardProps = {
  gallery: Gallery;
};

export default function GalleryCard({ gallery }: GalleryCardProps) {
  return (
    <Link
      href={`/galleries/${gallery.slug}`}
      className="group relative flex flex-col gap-4 rounded-2xl border border-border/60 bg-card/70 p-4 transition hover:-translate-y-1 hover:border-accent/70 hover:shadow-[var(--shadow)]"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
        <Image
          src={gallery.cover}
          alt={`${gallery.title} cover`}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">
          {gallery.location} · {gallery.year}
        </p>
        <h3 className="font-serif text-xl text-foreground">{gallery.title}</h3>
        <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.2em] text-muted">
          {gallery.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-border/60 px-3 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
