"use client";

import Link from "next/link";
import { useState } from "react";

import { navigation } from "./content";

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main" className="mx-auto flex w-full max-w-page items-center justify-between gap-6 px-5 py-3.5 sm:px-8 lg:px-12 2xl:px-16">
      <Link href="/" className="text-[0.95rem] font-semibold text-ink" onClick={() => setOpen(false)}>
        Ján Ďuriš
      </Link>

      <div className="hidden items-center gap-7 text-[0.95rem] md:flex">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} className="text-body hover:text-ink">
            {item.label}
          </Link>
        ))}
        <Link href="/cv" className="rounded-md border border-ink/25 px-3.5 py-1.5 font-medium text-ink hover:border-ink">
          CV
        </Link>
      </div>

      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line bg-surface text-ink md:hidden"
      >
        <span aria-hidden="true" className="flex w-4 flex-col gap-1">
          <span className="h-0.5 w-4 bg-current" />
          <span className="h-0.5 w-4 bg-current" />
          <span className="h-0.5 w-4 bg-current" />
        </span>
      </button>

      {open ? (
        <div id="mobile-menu" className="absolute inset-x-0 top-full border-b border-line bg-surface px-5 pb-4 shadow-sm sm:px-8 md:hidden">
          {[...navigation, { label: "CV", href: "/cv" }].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block border-t border-line py-3 text-base font-medium text-ink first:border-t-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : null}
    </nav>
  );
}
