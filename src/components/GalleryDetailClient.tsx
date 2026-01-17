"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import MasonryGrid from "@/components/MasonryGrid";
import Lightbox from "@/components/Lightbox";
import Toast from "@/components/Toast";
import { Gallery } from "@/content/galleries";

type GalleryDetailClientProps = {
  gallery: Gallery;
};

export default function GalleryDetailClient({ gallery }: GalleryDetailClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [toastVisible, setToastVisible] = useState(false);

  const paramIndex = useMemo(() => {
    const param = searchParams.get("photo");
    if (!param) return null;
    const index = Number(param) - 1;
    if (Number.isNaN(index)) return null;
    if (index < 0 || index >= gallery.photos.length) return null;
    return index;
  }, [searchParams, gallery.photos.length]);

  const handleOpen = (index: number) => {
    setSelectedIndex(index);
    router.replace(`/galleries/${gallery.slug}?photo=${index + 1}`, {
      scroll: false,
    });
  };

  const handleClose = () => {
    setSelectedIndex(null);
    router.replace(`/galleries/${gallery.slug}`, { scroll: false });
  };

  const handleShare = async (index: number) => {
    const url = `${window.location.origin}/galleries/${gallery.slug}?photo=${index + 1}`;
    await navigator.clipboard.writeText(url);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2000);
  };

  const photos = useMemo(() => gallery.photos, [gallery.photos]);
  const activeIndex = selectedIndex ?? paramIndex ?? 0;
  const lightboxOpen = selectedIndex !== null || paramIndex !== null;

  return (
    <>
      <MasonryGrid photos={photos} onSelect={handleOpen} />
      <Lightbox
        images={photos}
        isOpen={lightboxOpen}
        initialIndex={activeIndex}
        onClose={handleClose}
        onShare={handleShare}
      />
      <Toast message="Gallery link copied." visible={toastVisible} />
    </>
  );
}
