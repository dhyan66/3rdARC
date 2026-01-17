import Image from "next/image";
import { FilmSetStill } from "@/content/filmSetStills";

type FilmSetCardProps = {
  production: FilmSetStill;
  onViewStills?: () => void;
};

export default function FilmSetCard({
  production,
  onViewStills,
}: FilmSetCardProps) {
  return (
    <article className="grid gap-6 rounded-2xl border border-border/70 bg-card/70 p-6 md:grid-cols-[240px_1fr]">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
        <Image
          src={production.cover}
          alt={`${production.title} cover`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 240px"
        />
      </div>
      <div className="space-y-4">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
            {production.year}
          </p>
          <h3 className="font-serif text-2xl text-foreground">
            {production.title}
          </h3>
          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-muted">
            {production.role}
          </p>
        </div>
        <ul className="space-y-2 text-sm text-muted">
          {production.responsibilities.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>
        {onViewStills && (
          <button
            type="button"
            onClick={onViewStills}
            className="rounded-full border border-border/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-foreground transition hover:border-accent hover:text-accent"
          >
            View Stills
          </button>
        )}
      </div>
    </article>
  );
}
