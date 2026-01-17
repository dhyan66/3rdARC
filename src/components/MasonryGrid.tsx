import Image from "next/image";
import { GalleryPhoto } from "@/content/galleries";

type MasonryGridProps = {
  photos: GalleryPhoto[];
  onSelect?: (index: number) => void;
};

export default function MasonryGrid({ photos, onSelect }: MasonryGridProps) {
  return (
    <div className="columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
      {photos.map((photo, index) => (
        <button
          type="button"
          key={photo.src}
          className="group relative w-full overflow-hidden rounded-2xl border border-border/60 bg-card/70 text-left"
          onClick={() => onSelect?.(index)}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span className="absolute inset-x-4 bottom-4 text-xs uppercase tracking-[0.2em] text-white opacity-0 transition group-hover:opacity-100">
            View
          </span>
        </button>
      ))}
    </div>
  );
}
