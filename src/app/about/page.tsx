import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description: "About Arc Gallery Studio and its approach to editorial photography.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col gap-12">
      <header className="space-y-4">
        <p className="text-xs uppercase tracking-[0.4em] text-muted">About</p>
        <h1 className="font-serif text-4xl text-foreground">
          A studio devoted to slow image-making
        </h1>
        <p className="max-w-2xl text-sm text-muted">
          Arc Gallery Studio is a portrait and travel photography practice led
          by a small team of collaborators. We build visual essays with
          intentional pacing, quiet soundscapes, and tactile production.
        </p>
      </header>
      <section className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div className="space-y-4 text-sm text-muted">
          <p>
            Our work blends editorial portraiture with architectural and still
            life studies, focusing on atmosphere and detail. Projects often span
            multiple seasons, allowing the light and locations to shift naturally.
          </p>
          <p>
            We collaborate with brands, directors, and cultural institutions who
            value thoughtful pacing and handcrafted visuals. Each project begins
            with a narrative conversation and closes with a curated sequence.
          </p>
          <p>
            When not on assignment, we host small workshops and portfolio
            sessions designed for photographers seeking clarity and direction.
          </p>
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border/70">
          <Image
            src="/placeholders/about-portrait.svg"
            alt="Studio portrait placeholder"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
        </div>
      </section>
      <section className="grid gap-6 rounded-3xl border border-border/70 bg-card/70 p-8 md:grid-cols-3">
        {[
          {
            title: "Quiet Portraiture",
            text: "Directing with minimal gestures and layered light.",
          },
          {
            title: "Location Pacing",
            text: "Building stories through sequences, not single frames.",
          },
          {
            title: "Editorial Production",
            text: "Small crews, cinematic lighting, and precise styling.",
          },
        ].map((item) => (
          <div key={item.title} className="space-y-2">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">
              {item.title}
            </p>
            <p className="text-sm text-muted">{item.text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
