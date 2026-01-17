"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "arc-theme";

function getPreferredTheme() {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => getPreferredTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="hidden h-10 items-center gap-2 rounded-full border border-border/80 px-4 text-xs uppercase tracking-[0.2em] text-muted transition hover:text-foreground md:inline-flex"
      aria-label="Toggle dark mode"
    >
      {theme === "light" ? "Night" : "Day"}
    </button>
  );
}
