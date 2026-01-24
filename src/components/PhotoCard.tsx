import Image from "next/image";
import type { Photo } from "@/src/content/series";

const widthMap: Record<NonNullable<Photo["width"]>, string> = {
  sm: "min-w-[200px] md:min-w-[240px]",
  md: "min-w-[240px] md:min-w-[280px]",
  lg: "min-w-[300px] md:min-w-[340px]",
  xl: "min-w-[360px] md:min-w-[420px]"
};

export default function PhotoCard({ photo }: { photo: Photo }) {
  const widthClass = photo.width ? widthMap[photo.width] : widthMap.md;

  return (
    <article
      className={`group relative ${widthClass} h-[340px] md:h-[460px] lg:h-[560px] snap-start overflow-hidden rounded-[999px] bg-ink/5 shadow-soft transition-transform motion-safe:hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 768px) 35vw, 70vw"
        className="object-cover"
        priority={false}
      />
      {photo.caption ? (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent px-5 py-4 text-xs uppercase tracking-[0.2em] text-white">
          {photo.caption}
        </div>
      ) : null}
    </article>
  );
}
