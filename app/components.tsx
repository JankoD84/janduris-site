"use client";

import Link from "next/link";
import { useState } from "react";

import { mobileOnlyNavigation, navigation, openTo, profile, releaseSignal } from "./content";

export const sectionEyebrow =
  "text-xs font-medium uppercase tracking-[0.18em] text-sky-300/80 sm:text-sm sm:tracking-[0.22em]";
export const sectionTitle =
  "mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl";
export const cardClass =
  "rounded-lg border border-white/[0.065] bg-slate-950/34 p-4 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-sky-300/18 hover:bg-white/[0.045] hover:shadow-[0_22px_70px_rgba(56,189,248,0.08)] sm:p-6";
export const tagClass =
  "max-w-full break-words rounded-md border border-white/[0.07] bg-white/[0.035] px-2.5 py-1.5 text-xs text-slate-200 transition hover:border-sky-300/18 hover:bg-sky-300/[0.06] sm:px-3 sm:text-sm";

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.14),transparent_28rem),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.1),transparent_26rem)]" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px] sm:opacity-[0.18] sm:[background-size:44px_44px]" />
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
        <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-10">
          <Link href="/" className="text-sm font-semibold tracking-wide text-ink focus:outline-none focus:ring-2 focus:ring-sky-300/50" onClick={() => setIsMenuOpen(false)}>
            <span className="sm:hidden">JD</span>
            <span className="hidden sm:inline">Janko Ďuriš</span>
          </Link>
          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-white/12 bg-white/[0.045] text-sky-100 transition hover:border-sky-300/35 hover:bg-sky-300/[0.1] focus:outline-none focus:ring-2 focus:ring-sky-300/50 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex h-5 w-5 flex-col justify-center gap-1.5" aria-hidden="true">
              <span className="h-0.5 w-5 rounded bg-current" />
              <span className="h-0.5 w-5 rounded bg-current" />
              <span className="h-0.5 w-5 rounded bg-current" />
            </span>
          </button>
          <div className="hidden items-center justify-end gap-x-6 text-sm text-muted md:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300/50">
                {item.label}
              </Link>
            ))}
          </div>
          {isMenuOpen ? (
            <div className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-lg border border-white/12 bg-slate-950/95 p-2 shadow-soft backdrop-blur-xl md:hidden">
              {[...navigation, ...mobileOnlyNavigation].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06] hover:text-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300/50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ) : null}
        </nav>
      </header>
      {children}
      <footer className="border-t border-line px-6 py-8 text-center text-sm text-muted">
        © 2026 Janko Ďuriš. Built with Next.js and deployed on Vercel.
      </footer>
    </main>
  );
}

export function PageHeader({ eyebrow, title, description, intro }: Readonly<{ eyebrow: string; title: string; description: string; intro?: string }>) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-8 pt-24 sm:px-6 sm:pb-10 sm:pt-28 md:px-8 lg:px-10">
      <div className="max-w-3xl">
        <p className={sectionEyebrow}>{eyebrow}</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl lg:text-5xl">{title}</h1>
        <p className="mt-5 text-base leading-7 text-muted sm:text-lg sm:leading-8">{description}</p>
        {intro ? <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">{intro}</p> : null}
      </div>
    </section>
  );
}

export function Section({ eyebrow, title, children }: Readonly<{ eyebrow: string; title: string; children: React.ReactNode }>) {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-10 lg:py-16">
      <div className="mb-6 max-w-3xl sm:mb-9">
        <p className={sectionEyebrow}>{eyebrow}</p>
        <h2 className={sectionTitle}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

export function Card({ children, className = "" }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <article className={cardClass + " " + className}>{children}</article>;
}

export function ReleaseSignalCard() {
  return (
    <aside className="w-full overflow-hidden rounded-lg border border-sky-300/[0.16] bg-slate-950/55 p-4 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-sky-300/28 hover:shadow-[0_24px_80px_rgba(56,189,248,0.11)] sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky-300/80 sm:text-xs sm:tracking-[0.24em]">Example Release Signal</p>
          <h2 className="mt-2 text-xl font-semibold text-ink sm:text-2xl">{releaseSignal.title}</h2>
        </div>
        <StatusBadge label={releaseSignal.decision} tone="emerald" />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-300 sm:mt-5 sm:gap-2">
        {releaseSignal.pipeline.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-md border border-white/[0.07] bg-white/[0.035] px-2 py-1.5 sm:px-2.5">{step}</span>
            {index < releaseSignal.pipeline.length - 1 ? <span className="text-sky-300/60">→</span> : null}
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2.5 text-sm sm:mt-6 sm:space-y-3">
        <SignalRow label="Repository" value={releaseSignal.repository} />
        <SignalRow label="CI Checks" value={releaseSignal.ciChecks} tone="emerald" />
        <SignalRow label="Test Coverage" value={releaseSignal.coverage} />
        <SignalRow label="Risk Level" value={releaseSignal.risk} tone="amber" />
        <SignalRow label="Decision" value={releaseSignal.decision} tone="emerald" />
      </div>
      <p className="mt-4 text-xs leading-5 text-muted">{releaseSignal.note}</p>
      <TagList items={releaseSignal.badges} />
    </aside>
  );
}

function SignalRow({ label, value, tone = "default" }: Readonly<{ label: string; value: string; tone?: "default" | "emerald" | "amber" }>) {
  const valueClass = tone === "emerald" ? "text-emerald-200" : tone === "amber" ? "text-amber-200" : "text-slate-100";
  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-white/[0.07] bg-white/[0.032] px-3 py-2">
      <span className="text-muted">{label}</span>
      <span className={"font-medium " + valueClass}>{value}</span>
    </div>
  );
}

export function BulletList({ items, color = "emerald" }: Readonly<{ items: string[]; color?: "emerald" | "sky" }>) {
  const dot = color === "sky" ? "bg-sky-300" : "bg-emerald-300";
  return (
    <ul className="mt-3 space-y-2 text-sm text-slate-200">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className={"mt-2 h-1.5 w-1.5 shrink-0 rounded-full " + dot} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function TagList({ items, tone = "default" }: Readonly<{ items: string[]; tone?: "default" | "emerald" }>) {
  const className = tone === "emerald" ? "rounded-md bg-emerald-300/10 px-3 py-1.5 text-sm text-emerald-100" : tagClass;
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={className}>{item}</span>
      ))}
    </div>
  );
}

export function WorkTimeline({ items }: Readonly<{ items: Array<{ title: string; company: string; date: string; location: string; status: string; description: string; highlights: string[]; skills: string[] }> }>) {
  return (
    <div className="space-y-5 sm:space-y-6">
      {items.map((item) => (
        <article key={item.company + item.date} className="grid gap-3 md:grid-cols-[15rem_minmax(0,1fr)] lg:grid-cols-[17rem_minmax(0,1fr)]">
          <div className="md:pr-8 md:text-right lg:pr-10">
            <p className="inline-flex rounded-md border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-sm font-medium text-sky-100">{item.date}</p>
            <p className="mt-2 text-sm text-muted sm:mt-3">{item.location}</p>
          </div>
          <Card className="relative overflow-hidden">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-200">{item.status}</p>
            <h3 className="mt-2 text-xl font-semibold text-ink sm:text-2xl">{item.title} — {item.company}</h3>
            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{item.description}</p>
            <div className="mt-5 grid gap-5 lg:mt-6 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold text-sky-200">Highlights</p>
                <BulletList items={item.highlights} color="sky" />
              </div>
              <div>
                <p className="text-sm font-semibold text-emerald-200">Skills used</p>
                <TagList items={item.skills} tone="emerald" />
              </div>
            </div>
          </Card>
        </article>
      ))}
    </div>
  );
}

export function SkillsMatrix({ groups }: Readonly<{ groups: Array<{ category: string; practicalUse: string; capabilities: string[] }> }>) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {groups.map((group) => (
        <Card key={group.category} className="overflow-hidden lg:p-5">
          <h3 className="text-lg font-semibold text-ink">{group.category}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{group.practicalUse}</p>
          <TagList items={group.capabilities} />
        </Card>
      ))}
    </div>
  );
}

export function ProjectCard({ item }: Readonly<{ item: { title: string; status: string; problem: string; built: string; proves: string; tags: string[]; url?: string; role: string; currentStatus: string; nextStep: string } }>) {
  return (
    <Card className="flex min-h-0 flex-col overflow-hidden">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="max-w-xl break-words text-lg font-semibold text-ink sm:text-xl">{item.title}</h3>
        <StatusBadge label={item.status} />
      </div>
      <div className="mt-5 grid gap-4 text-sm leading-7 text-muted sm:text-base">
        <EvidenceBlock label="Problem" value={item.problem} />
        <EvidenceBlock label="What I built" value={item.built} />
        <EvidenceBlock label="What it proves" value={item.proves} />
      </div>
      <div className="mt-5 grid gap-3 border-t border-white/[0.07] pt-4 text-sm leading-6 text-muted">
        <EvidenceBlock label="My role" value={item.role} />
        <EvidenceBlock label="Current status" value={item.currentStatus} />
        <EvidenceBlock label="Next step" value={item.nextStep} />
      </div>
      <div className="mt-5 border-t border-white/[0.07] pt-4">
        <p className="text-sm font-semibold text-sky-200">Stack / tags</p>
        <TagList items={item.tags} />
      </div>
      {item.url ? <ExternalTextLink href={item.url} /> : null}
    </Card>
  );
}

function EvidenceBlock({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-200/90">{label}</p>
      <p className="mt-1">{value}</p>
    </div>
  );
}

export function WebsiteCard({ item }: Readonly<{ item: { title: string; url: string; type: string; status: string; description: string; proof: string[]; tags: string[] } }>) {
  return (
    <article className="overflow-hidden rounded-lg border border-emerald-200/[0.1] bg-emerald-300/[0.042] p-4 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-emerald-200/28 hover:bg-emerald-300/[0.06] hover:shadow-[0_24px_90px_rgba(16,185,129,0.11)] sm:p-6">
      <div className="mb-5 overflow-hidden rounded-lg border border-white/[0.08] bg-slate-950/60">
        <div className="flex items-center gap-1.5 border-b border-white/[0.07] bg-white/[0.035] px-3 py-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
          <span className="ml-2 min-w-0 truncate text-xs text-muted">{item.url.replace(/^https?:\/\//, "")}</span>
        </div>
        <div className="grid min-h-32 place-items-center px-4 py-7 text-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200/80">Live preview</p>
            <p className="mt-2 text-xl font-semibold text-ink">{item.title}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-emerald-200">{item.type}</p>
          <h3 className="mt-2 break-words text-xl font-semibold text-ink sm:text-2xl">{item.title}</h3>
        </div>
        <StatusBadge label={item.status} tone="emerald" />
      </div>
      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{item.description}</p>
      <ExternalTextLink href={item.url} tone="emerald" />
      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="text-sm font-semibold text-sky-200">What it proves</p>
        <BulletList items={item.proof} />
      </div>
      <TagList items={item.tags} tone="emerald" />
    </article>
  );
}

function ExternalTextLink({ href, tone = "sky" }: Readonly<{ href: string; tone?: "sky" | "emerald" }>) {
  const className = tone === "emerald"
    ? "mt-5 inline-flex max-w-full break-all rounded-md border border-emerald-200/20 px-3 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-200/40 hover:bg-emerald-300/[0.08] focus:outline-none focus:ring-2 focus:ring-emerald-200/40"
    : "mt-5 inline-flex max-w-full break-all rounded-md border border-sky-300/18 px-3 py-2 text-sm font-medium text-sky-100 transition hover:border-sky-300/35 hover:bg-sky-300/[0.07] focus:outline-none focus:ring-2 focus:ring-sky-300/45";
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{href.replace(/^https?:\/\//, "")}</a>;
}

export function ContactLinks() {
  const links = [
    { label: "Email", value: profile.email, href: "mailto:" + profile.email, ariaLabel: "Email Janko", icon: <EmailIcon /> },
    { label: "LinkedIn", value: "linkedin.com/in/jduris", href: profile.linkedin, ariaLabel: "Open LinkedIn profile", icon: <LinkedInIcon />, external: true },
    { label: "GitHub", value: "github.com/JankoD84", href: profile.github, ariaLabel: "Open GitHub profile", icon: <GitHubIcon />, external: true },
    { label: "Phone", value: profile.phone, href: "tel:" + profile.phone, ariaLabel: "Call Janko", icon: <PhoneIcon /> },
  ];

  return (
    <div className="grid gap-3">
      {links.map((link) => (
        <a key={link.label} href={link.href} aria-label={link.ariaLabel} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} className="flex min-h-16 items-center gap-3 rounded-lg border border-white/[0.07] bg-white/[0.035] p-3 text-left transition hover:border-sky-300/22 hover:bg-sky-300/[0.065] focus:outline-none focus:ring-2 focus:ring-sky-300/50 sm:p-4">
          <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-sky-300/18 bg-sky-300/[0.08] text-sky-100">{link.icon}</span>
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-ink">{link.label}</span>
            <span className="mt-1 block break-words text-sm text-muted">{link.value}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

export function ContactIconGroup() {
  const links = [
    { label: "Email Janko", href: "mailto:" + profile.email, icon: <EmailIcon /> },
    { label: "Open LinkedIn profile", href: profile.linkedin, icon: <LinkedInIcon />, external: true },
    { label: "Open GitHub profile", href: profile.github, icon: <GitHubIcon />, external: true },
    { label: "Call Janko", href: "tel:" + profile.phone, icon: <PhoneIcon /> },
  ];
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:justify-start sm:gap-3">
      {links.map((link) => (
        <a key={link.label} href={link.href} aria-label={link.label} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/12 bg-white/[0.045] text-sky-100 transition hover:border-sky-300/35 hover:bg-sky-300/[0.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-300/50 sm:min-h-12 sm:min-w-12">
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export function OpenToSection({ compact = false }: Readonly<{ compact?: boolean }>) {
  return (
    <section className={compact ? "mt-5" : "mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:px-10"}>
      <div className={compact ? "" : "mb-6 max-w-3xl sm:mb-9"}>
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-sky-300/80 sm:text-sm sm:tracking-[0.22em]">Availability</p>
        <h2 className={compact ? "mt-2 text-xl font-semibold text-ink" : sectionTitle}>What I’m open to</h2>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        {openTo.map((item) => (
          <span key={item} className="rounded-lg border border-white/[0.07] bg-white/[0.035] px-3 py-2 text-sm text-slate-200">{item}</span>
        ))}
      </div>
      {!compact ? (
        <div className="mt-6">
          <Link href="/cv" className="inline-flex min-h-11 items-center justify-center rounded-md bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300/50">View CV</Link>
        </div>
      ) : null}
    </section>
  );
}

export function StatusBadge({ label, tone = "sky" }: Readonly<{ label: string; tone?: "sky" | "emerald" }>) {
  const className = tone === "emerald" ? "border-emerald-200/20 bg-emerald-300/10 text-emerald-100" : "border-sky-300/20 bg-sky-300/10 text-sky-100";
  return <span className={"rounded-md border px-3 py-1.5 text-sm font-medium " + className}>{label}</span>;
}

function IconSvg({ children }: Readonly<{ children: React.ReactNode }>) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>;
}

function EmailIcon() {
  return <IconSvg><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></IconSvg>;
}

function LinkedInIcon() {
  return <IconSvg><path d="M8 11v7" /><path d="M8 8v.01" /><path d="M12 18v-7" /><path d="M12 14.5c0-2 1-3.5 3-3.5s3 1.5 3 3.5V18" /><rect x="3" y="3" width="18" height="18" rx="3" /></IconSvg>;
}

function GitHubIcon() {
  return <IconSvg><path d="M12 2.8a9.2 9.2 0 0 0-2.9 17.9c.46.08.62-.2.62-.44v-1.6c-2.52.55-3.05-1.08-3.05-1.08-.42-1.04-1.02-1.32-1.02-1.32-.83-.56.06-.55.06-.55.92.06 1.4.94 1.4.94.82 1.4 2.14 1 2.66.76.08-.6.32-1 .58-1.23-2.01-.23-4.12-1-4.12-4.47 0-.99.35-1.8.94-2.43-.1-.23-.41-1.16.09-2.4 0 0 .77-.25 2.52.93A8.6 8.6 0 0 1 12 6.5c.78 0 1.55.1 2.28.31 1.75-1.18 2.52-.93 2.52-.93.5 1.24.19 2.17.1 2.4.58.63.93 1.44.93 2.43 0 3.48-2.11 4.24-4.13 4.46.33.28.62.83.62 1.68v2.5c0 .24.16.52.63.44A9.2 9.2 0 0 0 12 2.8Z" /></IconSvg>;
}

function PhoneIcon() {
  return <IconSvg><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.32 1.78.6 2.63a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.26-1.26a2 2 0 0 1 2.11-.45c.85.28 1.73.48 2.63.6A2 2 0 0 1 22 16.92Z" /></IconSvg>;
}
