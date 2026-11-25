import Link from "next/link";

import { hireLinks, openSourceGroups, profile, services } from "./content";
import { Card, ContactIconGroup, ExternalTextLink, OpenToSection, ReleaseSignalCard, RepositoryCard, Section, SiteShell, WritingSection } from "./components";

export default function Home() {
  return (
    <SiteShell>
      <section className="relative mx-auto w-full max-w-6xl px-4 pb-10 pt-24 sm:px-6 sm:pb-14 sm:pt-28 md:px-8 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start lg:gap-10">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-200 sm:text-sm sm:tracking-[0.28em]">{profile.name}</p>
            <h1 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-5xl">{profile.title}</h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">{profile.message}</p>
            <ul className="mt-5 flex min-h-16 flex-wrap content-start gap-2 lg:min-h-0 xl:flex-nowrap">
              {profile.proofItems.map((item) => (
                <li key={item} className="inline-flex min-h-8 items-center whitespace-nowrap rounded-md border border-white/10 bg-slate-950 px-2 py-1 text-xs text-slate-200">{item}</li>
              ))}
            </ul>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Link href="/#hire" className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-md bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200">Hire me</Link>
              <Link href="/projects" className="inline-flex min-h-12 items-center justify-center whitespace-nowrap rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/[0.06]">See my work</Link>
              <Link href="/cv" className="inline-flex min-h-11 items-center whitespace-nowrap text-sm font-medium text-sky-100 underline decoration-sky-300/50 underline-offset-4 hover:text-white">Download CV</Link>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <ContactIconGroup />
              <p className="text-sm text-muted">{profile.location}</p>
            </div>
          </div>
          <ReleaseSignalCard />
        </div>
      </section>

      <Section eyebrow="Open source" title="QA automation and release engineering repos.">
        <div className="grid gap-4 md:grid-cols-3">
          {openSourceGroups.flatMap((group) => group.repos).slice(0, 3).map((item) => <RepositoryCard key={item.name} item={item} />)}
        </div>
        <ExternalTextLink href={profile.github} />
      </Section>

      <Section id="hire" eyebrow="Hire" title="Practical help for tests and releases.">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((item) => (
            <Card key={item.title}>
              <h3 className="text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm font-medium text-sky-200">{item.terms}</p>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{item.description}</p>
            </Card>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {hireLinks.map((item) => <ExternalTextLink key={item.href} href={item.href} label={item.label} />)}
          <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 focus:outline-none focus:ring-2 focus:ring-sky-300/50">Contact form</Link>
        </div>
        <p className="mt-6 text-sm leading-7 text-muted">Free checklists and kits for engineering teams: <ExternalTextLink href="https://payhip.com/dulvarn" /></p>
      </Section>

      <WritingSection />
      <OpenToSection />
    </SiteShell>
  );
}
