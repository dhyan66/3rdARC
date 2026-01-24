"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { cn } from "@/lib/utils";

const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<"mobile" | "smallTablet" | "largeTablet" | "desktop">(() => {
    // Initialize with correct value on mount to prevent flash
    if (typeof window === "undefined") return "desktop"; // SSR fallback
    const width = window.innerWidth;
    if (width < 768) return "mobile";
    if (width < 900) return "smallTablet";
    if (width < 1280) return "largeTablet";
    return "desktop";
  });

  useEffect(() => {
    const checkBreakpoint = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setBreakpoint("mobile");
      } else if (width < 900) {
        setBreakpoint("smallTablet");
      } else if (width < 1280) {
        setBreakpoint("largeTablet");
      } else {
        setBreakpoint("desktop");
      }
    };

    // No need to call checkBreakpoint() immediately since state is initialized correctly
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, []);

  return breakpoint;
};

const HoverExpand_001 = ({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);
  const breakpoint = useBreakpoint();
  const [isReady, setIsReady] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Preload a couple of images to avoid initial hover jank.
  useEffect(() => {
    let isCancelled = false;
    const toPreload = images.slice(0, 2);
    if (toPreload.length === 0) {
      setIsReady(true);
      return;
    }

    let loaded = 0;
    toPreload.forEach((img) => {
      const el = new Image();
      el.src = img.src;
      el.onload = () => {
        loaded += 1;
        if (!isCancelled && loaded === toPreload.length) setIsReady(true);
      };
      el.onerror = () => {
        loaded += 1;
        if (!isCancelled && loaded === toPreload.length) setIsReady(true);
      };
    });

    return () => {
      isCancelled = true;
    };
  }, [images]);

  const openLightbox = (index: number) => {
    setActiveImage(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const showPrev = () => {
    if (activeImage === null) return;
    setActiveImage((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  const showNext = () => {
    if (activeImage === null) return;
    setActiveImage((prev) => {
      if (prev === null) return 0;
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  // Responsive configuration based on breakpoint
  const config = {
    mobile: {
      layout: "grid" as const,
      numVisible: Math.min(6, images.length),
      height: "min(10rem, 24vh)",
      gap: "gap-3",
      padding: "px-0",
    },
    smallTablet: {
      layout: "horizontal" as const,
      numVisible: 6,
      expandedPercent: 50,
      collapsedPercent: 25,
      height: "min(24rem, 45vh)",
      gap: "gap-2",
      padding: "px-0",
    },
    largeTablet: {
      layout: "horizontal" as const,
      numVisible: 8,
      expandedPercent: 46,
      collapsedPercent: 18,
      height: "min(28rem, 50vh)",
      gap: "gap-3",
      padding: "px-0",
    },
    desktop: {
      layout: "horizontal" as const,
      numVisible: 10,
      expandedWidth: "27.65625rem", // 442px - original fixed size
      collapsedWidth: "9.21875rem", // 147px - original fixed size
      height: "min(36.875rem, 60vh)",
      gap: "gap-5",
      padding: "px-0",
      maxWidth: "max-w-[1200px]",
    },
  }[breakpoint];

  // Mobile: Grid layout (3 columns)
  if (config.layout === "grid") {
    return (
      <motion.div
        initial={{ opacity: 0, translateY: 20 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 0.25 }}
        className={cn("relative w-full", config.padding, className)}
      >
        <div className={cn("grid grid-cols-3 w-full", config.gap)}>
          {images.slice(0, config.numVisible).map((image, index) => {
            const isActive = activeImage === index;
            return (
              <motion.div
                key={index}
                className={cn(
                  "relative overflow-hidden rounded-2xl cursor-pointer",
                  isActive ? "z-10" : "z-0"
                )}
                initial={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0, scale: isActive ? 1.03 : 1 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                style={{ height: config.height, willChange: "transform" }}
                onClick={() => openLightbox(index)}
                onTouchStart={() => openLightbox(index)}
              >
                <img
                  src={image.src}
                  className="size-full object-cover"
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {isActive && (
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-[0.6875rem] leading-snug text-white/90 font-medium">
                      {image.code}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Mobile lightbox */}
        {isLightboxOpen && activeImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative w-full max-w-[92vw]" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute -top-10 right-0 text-white/90 text-sm px-3 py-2"
                onClick={closeLightbox}
                aria-label="Close"
              >
                Close
              </button>
              <img
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                className="w-full max-h-[80vh] object-contain"
                decoding="async"
              />
              <div className="mt-3 flex items-center justify-between text-white/80 text-xs">
                <button className="px-3 py-2" onClick={showPrev} aria-label="Previous image">
                  Prev
                </button>
                <p className="text-center">{images[activeImage].code}</p>
                <button className="px-3 py-2" onClick={showNext} aria-label="Next image">
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    );
  }

  // Horizontal layout for tablets and desktop
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.25 }}
      className={cn("relative w-full", config.padding, className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={cn("w-full mx-auto", "maxWidth" in config ? config.maxWidth : "")}
      >
        <div
          className={cn(
            "flex w-full items-center",
            breakpoint === "mobile" ? "justify-start overflow-x-auto hide-scrollbar" : "justify-center",
            config.gap
          )}
          style={breakpoint === "mobile" ? { WebkitOverflowScrolling: "touch", touchAction: "pan-x" } : undefined}
        >
          {images.slice(0, config.numVisible).map((image, index) => {
            const isActive = activeImage === index;

            // Desktop uses fixed widths, tablets use percentages
            const width =
              "expandedWidth" in config
                ? isActive
                  ? config.expandedWidth
                  : config.collapsedWidth
                : isActive
                  ? `${config.expandedPercent}%`
                  : `${config.collapsedPercent}%`;

            const initialWidth = "expandedWidth" in config ? config.collapsedWidth : `${config.collapsedPercent}%`;

            return (
              <motion.div
                key={index}
                className="relative cursor-pointer overflow-hidden rounded-3xl"
                initial={{ width: initialWidth, height: "20rem" }}
                animate={{ width, height: config.height }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                onClick={() => setActiveImage(index)}
                onHoverStart={() => {
                  if (isReady) setActiveImage(index);
                }}
                onTouchStart={() => setActiveImage(index)}
                style={{ willChange: "width, height" }}
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute h-full w-full bg-gradient-to-t from-black/40 to-transparent"
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute flex h-full w-full flex-col items-end justify-end p-4"
                    >
                      <p className="text-left text-xs text-white/50">{image.code}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <img
                  src={image.src}
                  className="size-full object-cover"
                  alt={image.alt}
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.div>
  );
};

export { HoverExpand_001 };
