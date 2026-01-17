"use client";

import { AnimatePresence, motion } from "framer-motion";

type ToastProps = {
  message: string;
  visible: boolean;
};

export default function Toast({ message, visible }: ToastProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed bottom-8 left-1/2 z-[110] -translate-x-1/2 rounded-full border border-border/80 bg-background px-5 py-2 text-xs uppercase tracking-[0.2em] text-foreground shadow-[var(--shadow)]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
