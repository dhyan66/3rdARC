"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/galleries", label: "Galleries" },
  { href: "/film-set-stills", label: "Film Set Stills" },
  { href: "/about", label: "About" },
  { href: "/media", label: "Media" },
  { href: "/workshops", label: "Workshops" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="font-serif text-lg uppercase tracking-[0.3em] text-foreground"
        >
          Arc Gallery
        </Link>
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-[0.2em] text-muted md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 text-sm uppercase tracking-[0.2em] text-muted transition hover:text-foreground md:hidden"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="flex h-full flex-col px-6 py-8"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-serif text-lg uppercase tracking-[0.3em]">
                  Arc Gallery
                </span>
                <button
                  type="button"
                  className="h-10 w-10 rounded-full border border-border/80 text-xs uppercase tracking-[0.2em]"
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
              <div className="mt-10 flex flex-col gap-6 text-base uppercase tracking-[0.18em] text-muted">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <Link
                      href={link.href}
                      className="hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-auto border-t border-border/70 pt-6 text-sm text-muted">
                <p>Quiet editorial photography and immersive workshops.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
