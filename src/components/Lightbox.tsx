"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { clampIndex } from "@/lib/utils";

type LightboxImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type LightboxProps = {
  images: LightboxImage[];
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
  onShare?: (index: number) => void;
};

export default function Lightbox({
  images,
  isOpen,
  initialIndex = 0,
  onClose,
  onShare,
}: LightboxProps) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [mounted, setMounted] = useState(false);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setActiveIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  const goNext = useCallback(
    () => setActiveIndex((value) => clampIndex(value + 1, images.length)),
    [images.length],
  );
  const goPrev = useCallback(
    () => setActiveIndex((value) => clampIndex(value - 1, images.length)),
    [images.length],
  );

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") goNext();
      if (event.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, goNext, goPrev, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const next = images[clampIndex(activeIndex + 1, images.length)];
    const prev = images[clampIndex(activeIndex - 1, images.length)];
    [next, prev].forEach((img) => {
      const preload = new window.Image();
      preload.src = img.src;
    });
  }, [activeIndex, images, isOpen]);

  const activeImage = useMemo(
    () => images[clampIndex(activeIndex, images.length)],
    [activeIndex, images],
  );

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onPointerDown={(event) => {
            startX.current = event.clientX;
          }}
          onPointerUp={(event) => {
            if (startX.current === null) return;
            const delta = event.clientX - startX.current;
            if (Math.abs(delta) > 60) {
              if (delta < 0) goNext();
              if (delta > 0) goPrev();
            }
            startX.current = null;
          }}
        >
          <button
            type="button"
            className="absolute right-6 top-6 rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white"
            onClick={onClose}
          >
            Close
          </button>
          <div className="absolute left-6 top-6 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/70">
            <span>
              {activeIndex + 1} / {images.length}
            </span>
            {onShare && (
              <button
                type="button"
                className="rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white"
                onClick={() => onShare(activeIndex)}
              >
                Share
              </button>
            )}
          </div>
          <button
            type="button"
            className="absolute left-6 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white md:block"
            onClick={goPrev}
            aria-label="Previous image"
          >
            Prev
          </button>
          <button
            type="button"
            className="absolute right-6 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white md:block"
            onClick={goNext}
            aria-label="Next image"
          >
            Next
          </button>
          <motion.div
            key={activeImage?.src}
            className="relative h-[70vh] w-full max-w-5xl"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeImage && (
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 70vw"
                priority
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
