"use client";

import { useEffect } from "react";

const STORAGE_KEY = "theme";

function apply(dark: boolean) {
  const root = document.documentElement;
  root.classList.toggle("dark", dark);
  root.style.colorScheme = dark ? "dark" : "light";
}

/* Default follows the system. A click saves an explicit choice; the icon is driven by the .dark class, so there is no hydration mismatch. */
export function ThemeToggle() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (event: MediaQueryListEvent) => {
      try {
        if (!localStorage.getItem(STORAGE_KEY)) apply(event.matches);
      } catch {
        apply(event.matches);
      }
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  function toggle() {
    const dark = !document.documentElement.classList.contains("dark");
    apply(dark);
    try {
      localStorage.setItem(STORAGE_KEY, dark ? "dark" : "light");
    } catch {
      /* storage unavailable: the switch still works for this page view */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-ink hover:border-ink/40"
    >
      {/* Moon in light mode, sun in dark mode */}
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[1.1rem] w-[1.1rem] dark:hidden" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" className="hidden h-[1.1rem] w-[1.1rem] dark:block" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
      </svg>
    </button>
  );
}
