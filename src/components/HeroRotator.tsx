"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type HeroImage = {
  src: string;
  alt: string;
};

type HeroRotatorProps = {
  images: HeroImage[];
  intervalMs?: number;
};

export default function HeroRotator({
  images,
  intervalMs = 4000,
}: HeroRotatorProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(timer);
  }, [paused, images.length, intervalMs]);

  return (
    <div
      className="relative h-[70vh] min-h-[420px] overflow-hidden rounded-3xl border border-border/60 shadow-[var(--shadow)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={images[active]?.src ?? "hero"}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={images[active]?.src ?? ""}
            alt={images[active]?.alt ?? ""}
            fill
            sizes="(max-width: 768px) 100vw, 80vw"
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
    </div>
  );
}
