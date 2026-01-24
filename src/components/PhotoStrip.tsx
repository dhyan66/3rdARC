import type { Photo } from "@/src/content/series";
import PhotoCard from "@/src/components/PhotoCard";

export default function PhotoStrip({ photos }: { photos: Photo[] }) {
  return (
    <section className="mt-10">
      <div className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6">
        {photos.map((photo) => (
          <div key={photo.src} className="snap-start">
            <PhotoCard photo={photo} />
          </div>
        ))}
      </div>
    </section>
  );
}
