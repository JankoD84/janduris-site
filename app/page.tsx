"use client";

import { useState } from "react";

import {
  about,
  buildingToward,
  capabilities,
  education,
  navigation,
  profile,
  projects,
  releaseSignal,
  proofOfWork,
  signalBar,
  skills,
  websites,
  workHistory,
} from "./content";

const sectionEyebrow =
  "text-xs font-medium uppercase tracking-[0.18em] text-sky-300/80 sm:text-sm sm:tracking-[0.22em]";
const sectionTitle =
  "mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl lg:text-4xl";
const cardClass =
  "rounded-lg border border-white/12 bg-slate-950/45 p-4 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-sky-300/25 hover:bg-white/[0.055] hover:shadow-[0_24px_90px_rgba(56,189,248,0.12)] sm:p-6";
const tagClass =
  "max-w-full break-words rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-slate-200 transition hover:border-sky-300/20 hover:bg-sky-300/[0.08] sm:px-3 sm:text-sm";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.14),transparent_28rem),radial-gradient(circle_at_82%_18%,rgba(16,185,129,0.1),transparent_26rem)]" />
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:36px_36px] sm:opacity-[0.18] sm:[background-size:44px_44px]" />
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/82 backdrop-blur-xl">
        <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-8 lg:px-10">
          <a
            href="#home"
            className="text-sm font-semibold tracking-wide text-ink focus:outline-none focus:ring-2 focus:ring-sky-300/50"
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="sm:hidden">JD</span>
            <span className="hidden sm:inline">Janko Ďuriš</span>
          </a>
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
              <a key={item.href} href={item.href} className="transition hover:text-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300/50">
                {item.label}
              </a>
            ))}
          </div>
          {isMenuOpen ? (
            <div className="absolute left-4 right-4 top-[calc(100%+0.5rem)] rounded-lg border border-white/12 bg-slate-950/95 p-2 shadow-soft backdrop-blur-xl md:hidden">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06] hover:text-sky-100 focus:outline-none focus:ring-2 focus:ring-sky-300/50"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ) : null}
        </nav>
      </header>

      <section
        id="home"
        className="relative mx-auto flex w-full max-w-6xl flex-col justify-center px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:min-h-[88vh] md:px-8 lg:px-10 lg:pt-32"
      >
        <div className="absolute inset-x-4 top-20 h-px sm:inset-x-6 sm:top-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end lg:gap-10">
          <div className="max-w-3xl">
            <div className="mb-4 flex flex-wrap gap-2 sm:hidden">
              {["4+ years in QA", "SolarWinds → Flowio → Baťa", "Building Dulvarn", "Python / Robot Framework"].map((item) => (
                <span key={item} className="rounded-md border border-sky-300/20 bg-sky-300/10 px-2.5 py-1.5 text-xs font-medium text-sky-100">
                  {item}
                </span>
              ))}
            </div>
            <p className="mb-5 hidden max-w-3xl rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-100 sm:inline-flex">
              {profile.proofLine}
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/80 sm:text-sm sm:tracking-[0.28em]">
              {profile.name}
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.04] tracking-tight text-ink sm:mt-5 sm:text-5xl lg:text-7xl">
              {profile.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:mt-7 sm:text-lg sm:leading-8 lg:text-xl">
              {profile.message}
            </p>
            <div className="mt-7 flex flex-col gap-2.5 sm:mt-10 sm:flex-row sm:items-center sm:gap-3">
              <a
                href="#proof"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300/50 sm:min-h-12 sm:w-auto"
              >
                View Proof of Work
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-md border border-white/16 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06] focus:outline-none focus:ring-2 focus:ring-sky-300/50 sm:min-h-12 sm:w-auto"
              >
                Explore Projects
              </a>
              <div className="mt-1 flex justify-center sm:ml-2 sm:mt-0">
                <ContactIconGroup />
              </div>
            </div>
          </div>

          <ReleaseSignalCard />
        </div>

        <div className="mt-8 grid gap-3 sm:mt-12 md:grid-cols-2 lg:grid-cols-4">
          {signalBar.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-white/10 bg-slate-950/45 p-3 text-sm text-slate-200 backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-sky-300/25 hover:bg-white/[0.055] sm:p-4"
            >
              <h2 className="font-semibold text-ink">{item.title}</h2>
              <p className="mt-2 leading-6 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Section id="about" eyebrow="About" title="Practical QA experience, now pointed at release quality.">
        <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className={cardClass}>
            <StatusRail labels={["QA", "CI", "RISK", "GO"]} />
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Positioning
            </p>
            <p className="mt-4 text-xl font-semibold leading-8 text-ink sm:text-2xl sm:leading-9">
              QA engineer, automation learner, product builder.
            </p>
          </div>
          <div className={cardClass}>
            <div className="space-y-4 text-sm leading-7 text-muted sm:space-y-5 sm:text-base sm:leading-8">
              {about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section id="capabilities" eyebrow="Capability Snapshot" title="The useful parts of QA, automation, and engineering brought together.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <article key={capability.title} className={cardClass + " min-h-48 overflow-hidden"}>
              <StatusRail labels={["TEST", "CHECK", "READY"]} />
              <p className="mt-5 text-sm font-semibold text-sky-200">0{index + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink sm:text-xl">{capability.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{capability.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="work" eyebrow="Work Experience" title="A QA path from enterprise software to e-commerce release quality.">
        <div className="space-y-5 sm:space-y-6">
          {workHistory.map((item) => (
            <article key={item.company + item.date} className="grid gap-3 md:grid-cols-[15rem_minmax(0,1fr)] lg:grid-cols-[17rem_minmax(0,1fr)]">
              <div className="md:pr-8 md:text-right lg:pr-10">
                <p className="inline-flex rounded-md border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-sm font-medium text-sky-100">
                  {item.date}
                </p>
                <p className="mt-2 text-sm text-muted sm:mt-3">{item.location}</p>
              </div>
              <div className={cardClass + " relative overflow-hidden"}>
                <StatusRail labels={["QA", "REGRESSION", "VALIDATE"]} />
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-200">
                      {item.status}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-ink sm:text-2xl">
                      {item.title} — {item.company}
                    </h3>
                  </div>
                </div>
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
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects & Systems" title="Systems that turn QA knowledge into working tools.">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} item={project} />
          ))}
        </div>
      </Section>

      <Section id="websites" eyebrow="Websites & Live Work" title="Public-facing proof, not just a list of skills.">
        <div className="grid gap-4 lg:grid-cols-2">
          {websites.map((site) => (
            <WebsiteCard key={site.url} item={site} />
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills Matrix" title="What these skills are useful for in real work.">
        <div className="grid gap-4 lg:grid-cols-5">
          {skills.map((group) => (
            <article key={group.category} className={cardClass + " overflow-hidden lg:p-5"}>
              <StatusRail labels={["CAPABILITY", "USE"]} />
              <h3 className="mt-5 text-lg font-semibold text-ink">{group.category}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{group.practicalUse}</p>
              <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                {group.capabilities.map((item) => (
                  <span key={item} className={tagClass}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="proof" eyebrow="Proof of Work" title="QA practice, automation, release quality and product building.">
        <p className="mb-6 max-w-3xl text-base leading-7 text-muted sm:mb-8 sm:text-lg sm:leading-8">
          My work sits at the intersection of QA practice, automation, release quality and product building.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {proofOfWork.map((item) => (
            <article key={item.title} className={cardClass}>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="direction" eyebrow="Current Direction" title="Focused growth, shipped as useful tools.">
        <div className="rounded-lg border border-sky-300/20 bg-sky-300/[0.07] p-6 shadow-soft transition duration-200 hover:border-sky-300/35 hover:bg-sky-300/[0.085] sm:p-8">
          <p className="max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            My current focus is becoming stronger as a QA Automation Engineer / SDET-oriented engineer while building practical release quality tools through Dulvarn.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {buildingToward.map((item) => (
              <span key={item} className="rounded-md border border-sky-200/15 bg-black/15 px-3 py-2 text-sm text-sky-100">
                {item}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section id="education" eyebrow="Education" title="Training and technical foundation.">
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.school} className="overflow-hidden rounded-lg border border-white/10 bg-white/[0.035] p-4 sm:p-5">
              <p className="text-sm font-medium text-sky-200">{item.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{item.school}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.program}</p>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{item.description}</p>
              {item.skills.length > 0 ? <TagList items={item.skills} /> : null}
            </article>
          ))}
        </div>
      </Section>

      <section
        id="contact"
        className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 lg:px-10 lg:py-20"
      >
        <div className="rounded-lg border border-sky-300/20 bg-sky-300/[0.07] p-5 sm:p-8 lg:p-10">
          <p className={sectionEyebrow}>Contact</p>
          <h2 className={sectionTitle}>
            Interested in QA automation, release quality, or practical QA audits?
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            I’m open to relevant QA automation, release quality, product QA and practical audit conversations.
          </p>
          <div className="mt-6 sm:mt-8">
            <ContactIconGroup />
          </div>
        </div>
      </section>

      <footer className="border-t border-line px-6 py-8 text-center text-sm text-muted">
        © 2026 Janko Ďuriš. Built with Next.js and deployed on Vercel.
      </footer>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: Readonly<{
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-20 px-4 py-10 sm:px-6 sm:py-14 md:px-8 md:scroll-mt-24 lg:px-10 lg:py-16">
      <div className="mb-6 max-w-3xl sm:mb-9">
        <p className={sectionEyebrow}>{eyebrow}</p>
        <h2 className={sectionTitle}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ReleaseSignalCard() {
  return (
    <aside className="w-full overflow-hidden rounded-lg border border-sky-300/20 bg-slate-950/65 p-4 shadow-soft backdrop-blur transition duration-200 hover:-translate-y-0.5 hover:border-sky-300/35 hover:shadow-[0_24px_90px_rgba(56,189,248,0.14)] sm:p-5">
      <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-sky-300/80 sm:text-xs sm:tracking-[0.24em]">
            Visual concept
          </p>
          <h2 className="mt-2 text-xl font-semibold text-ink sm:text-2xl">Release Signal</h2>
        </div>
        <StatusBadge label={releaseSignal.decision} tone="emerald" />
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs font-medium text-slate-300 sm:mt-5 sm:gap-2">
        {releaseSignal.pipeline.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1.5 sm:px-2.5">{step}</span>
            {index < releaseSignal.pipeline.length - 1 ? (
              <span className="text-sky-300/60">→</span>
            ) : null}
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
      <div className="mt-5 flex flex-wrap gap-2">
        {releaseSignal.badges.map((badge) => (
          <span key={badge} className="max-w-full break-words rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1.5 text-xs text-slate-200 sm:px-3 sm:text-sm">
            {badge}
          </span>
        ))}
      </div>
    </aside>
  );
}

function SignalRow({
  label,
  value,
  tone = "default",
}: Readonly<{
  label: string;
  value: string;
  tone?: "default" | "emerald" | "amber";
}>) {
  const valueClass =
    tone === "emerald"
      ? "text-emerald-200"
      : tone === "amber"
        ? "text-amber-200"
        : "text-slate-100";

  return (
    <div className="flex items-center justify-between gap-3 rounded-md border border-white/10 bg-white/[0.035] px-3 py-2">
      <span className="text-muted">{label}</span>
      <span className={"font-medium " + valueClass}>{value}</span>
    </div>
  );
}

function StatusRail({ labels }: Readonly<{ labels: string[] }>) {
  return (
    <div className="-mx-1 -mt-1 mb-1 flex flex-wrap gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-sky-200/70 sm:-mx-2 sm:-mt-2 sm:text-[0.65rem] sm:tracking-[0.18em]">
      {labels.map((label) => (
        <span key={label} className="rounded border border-white/10 bg-black/20 px-2 py-1">
          {label}
        </span>
      ))}
    </div>
  );
}

function BulletList({
  items,
  color = "emerald",
}: Readonly<{
  items: string[];
  color?: "emerald" | "sky";
}>) {
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

function TagList({
  items,
  tone = "default",
}: Readonly<{
  items: string[];
  tone?: "default" | "emerald";
}>) {
  const className =
    tone === "emerald"
      ? "rounded-md bg-emerald-300/10 px-3 py-1.5 text-sm text-emerald-100"
      : tagClass;

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className={className}>
          {item}
        </span>
      ))}
    </div>
  );
}

function ProjectCard({
  item,
}: Readonly<{
  item: {
    title: string;
    status: string;
    description: string;
    proof: string[];
    tags: string[];
  };
}>) {
  return (
    <article className={cardClass + " flex flex-col overflow-hidden"}>
      <StatusRail labels={["PRODUCT", "SYSTEM", "QA"]} />
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="max-w-xl break-words text-lg font-semibold text-ink sm:text-xl">{item.title}</h3>
        <StatusBadge label={item.status} />
      </div>
      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{item.description}</p>
      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="text-sm font-semibold text-sky-200">What it shows</p>
        <BulletList items={item.proof} />
      </div>
      <TagList items={item.tags} />
    </article>
  );
}

function WebsiteCard({
  item,
}: Readonly<{
  item: {
    title: string;
    url: string;
    type: string;
    status: string;
    description: string;
    proof: string[];
    tags: string[];
  };
}>) {
  return (
    <article className="overflow-hidden rounded-lg border border-emerald-200/15 bg-emerald-300/[0.045] p-4 shadow-soft transition duration-200 hover:-translate-y-0.5 hover:border-emerald-200/35 hover:bg-emerald-300/[0.065] hover:shadow-[0_24px_90px_rgba(16,185,129,0.13)] sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-emerald-200">{item.type}</p>
          <h3 className="mt-2 break-words text-xl font-semibold text-ink sm:text-2xl">{item.title}</h3>
        </div>
        <StatusBadge label={item.status} tone="emerald" />
      </div>
      <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{item.description}</p>
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex max-w-full rounded-md border border-emerald-200/20 px-3 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-200/40 hover:bg-emerald-300/[0.08] focus:outline-none focus:ring-2 focus:ring-emerald-200/40"
      >
        Visit site
      </a>
      <div className="mt-6 border-t border-white/10 pt-5">
        <p className="text-sm font-semibold text-sky-200">What it proves</p>
        <BulletList items={item.proof} />
      </div>
      <TagList items={item.tags} tone="emerald" />
    </article>
  );
}

function StatusBadge({
  label,
  tone = "sky",
}: Readonly<{
  label: string;
  tone?: "sky" | "emerald";
}>) {
  const className =
    tone === "emerald"
      ? "border-emerald-200/20 bg-emerald-300/10 text-emerald-100"
      : "border-sky-300/20 bg-sky-300/10 text-sky-100";

  return (
    <span className={"rounded-md border px-3 py-1.5 text-sm font-medium " + className}>
      {label}
    </span>
  );
}

function ContactIconGroup() {
  const links = [
    {
      label: "Email Janko",
      href: "mailto:" + profile.email,
      icon: <EmailIcon />,
    },
    {
      label: "Open LinkedIn profile",
      href: profile.linkedin,
      icon: <LinkedInIcon />,
      external: true,
    },
    {
      label: "Open GitHub profile",
      href: profile.github,
      icon: <GitHubIcon />,
      external: true,
    },
    {
      label: "Call Janko",
      href: "tel:" + profile.phone,
      icon: <PhoneIcon />,
    },
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 sm:justify-start sm:gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          aria-label={link.label}
          target={link.external ? "_blank" : undefined}
          rel={link.external ? "noreferrer" : undefined}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border border-white/12 bg-white/[0.045] text-sky-100 transition hover:border-sky-300/35 hover:bg-sky-300/[0.1] hover:text-white focus:outline-none focus:ring-2 focus:ring-sky-300/50 sm:min-h-12 sm:min-w-12"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

function IconSvg({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 sm:h-8 sm:w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

function EmailIcon() {
  return (
    <IconSvg>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </IconSvg>
  );
}

function LinkedInIcon() {
  return (
    <IconSvg>
      <path d="M7 10v8" />
      <path d="M7 7.2v.1" />
      <path d="M11 18v-8" />
      <path d="M11 13.5c0-2.2 1.2-3.5 3.1-3.5 1.8 0 2.9 1.2 2.9 3.5V18" />
      <rect x="3" y="3" width="18" height="18" rx="3" />
    </IconSvg>
  );
}

function GitHubIcon() {
  return (
    <IconSvg>
      <path d="M9 19c-4 1.2-4-2-5.5-2.4" />
      <path d="M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.6 4.6 0 0 0 18.7 7c.1-.4.6-1.9-.2-3.5 0 0-1.1-.3-3.5 1.3a12.1 12.1 0 0 0-6 0C6.6 3.2 5.5 3.5 5.5 3.5 4.7 5.1 5.2 6.6 5.3 7A4.6 4.6 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22" />
    </IconSvg>
  );
}

function PhoneIcon() {
  return (
    <IconSvg>
      <rect x="7" y="2" width="10" height="20" rx="2" />
      <path d="M11 18h2" />
    </IconSvg>
  );
}
