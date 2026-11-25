import Link from "next/link";

import { footerNavigation, openTo, profile } from "./content";
import { SiteNav } from "./nav";

/* Shared building blocks. Light, quiet surfaces; one accent (pass green) for state. */

export const sectionEyebrow = "text-sm font-medium text-muted";
export const sectionTitle = "text-2xl font-semibold tracking-tight text-ink sm:text-[1.85rem]";
export const cardClass = "rounded-lg border border-line bg-surface p-5 sm:p-6";
const tagBase = "inline-flex max-w-full items-center rounded-md border px-2.5 py-1 text-[0.8rem] leading-5 [overflow-wrap:anywhere]";
export const tagClass = tagBase + " border-line bg-paper text-body";
export const tagStrongClass = tagBase + " border-ink/25 bg-surface font-medium text-ink";

export function SiteShell({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-on-ink">
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="relative">
          <SiteNav />
        </div>
      </header>
      <main id="content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid w-full max-w-page gap-8 px-5 py-10 sm:px-8 lg:px-12 2xl:px-16 min-[1920px]:px-24 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-[0.95rem] text-muted">{profile.title}, {profile.location}</p>
          <p className="mt-4 text-[0.95rem]">
            <a className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink" href={"mailto:" + profile.email}>{profile.email}</a>
          </p>
        </div>
        <ul className="space-y-1.5 text-[0.95rem]">
          {footerNavigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-body hover:text-ink">{item.label}</Link>
            </li>
          ))}
        </ul>
        <ul className="space-y-1.5 text-[0.95rem]">
          <li><a href={profile.github} className="text-body hover:text-ink" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href={profile.linkedin} className="text-body hover:text-ink" target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><a href={profile.upwork} className="text-body hover:text-ink" target="_blank" rel="noreferrer">Upwork</a></li>
          <li><a href={profile.payhip} className="text-body hover:text-ink" target="_blank" rel="noreferrer">Checklists and kits</a></li>
        </ul>
      </div>
    </footer>
  );
}

export function PageHeader({ title, description, intro }: Readonly<{ eyebrow?: string; title: string; description: string; intro?: string }>) {
  return (
    <section className="mx-auto w-full max-w-page px-5 pb-6 pt-14 sm:px-8 lg:px-12 2xl:px-16 min-[1920px]:px-24 sm:pt-20">
      <h1 className="max-w-3xl text-[2rem] font-semibold leading-tight tracking-tight text-ink sm:text-[2.6rem]">{title}</h1>
      <p className="mt-4 max-w-prose text-lg text-body">{description}</p>
      {intro ? <p className="mt-3 max-w-prose text-[0.95rem] text-muted">{intro}</p> : null}
    </section>
  );
}

export function Section({ title, children, id, lead }: Readonly<{ eyebrow?: string; title: string; children: React.ReactNode; id?: string; lead?: string }>) {
  return (
    <section id={id} className="mx-auto w-full max-w-page px-5 py-12 sm:px-8 sm:py-16 lg:px-12 xl:grid xl:grid-cols-[16rem_minmax(0,1fr)] xl:gap-16 2xl:grid-cols-[19rem_minmax(0,1fr)] 2xl:gap-24 min-[1920px]:grid-cols-[22rem_minmax(0,1fr)] min-[1920px]:gap-32 2xl:px-16 min-[1920px]:px-24">
      <div className="mb-8 max-w-prose xl:mb-0">
        <h2 className={sectionTitle}>{title}</h2>
        {lead ? <p className="mt-3 text-body">{lead}</p> : null}
      </div>
      <div className="min-w-0 [&_p]:max-w-[75ch]">{children}</div>
    </section>
  );
}

export function Card({ children, className = "" }: Readonly<{ children: React.ReactNode; className?: string }>) {
  return <article className={cardClass + " " + className}>{children}</article>;
}

/* Signature element: an example release decision. Checks resolve in order, then the verdict. */
export function ReleaseVerdict() {
  const checks: Array<{ label: string; state: "Passed" | "Not executed" | "Unknown"; tone: "pass" | "warn" }> = [
    { label: "Build", state: "Passed", tone: "pass" },
    { label: "Unit and API tests", state: "Passed", tone: "pass" },
    { label: "Checkout E2E", state: "Not executed", tone: "warn" },
    { label: "Rollback with new schema", state: "Unknown", tone: "warn" },
  ];
  return (
    <figure className="rounded-xl border border-line bg-surface p-5 shadow-[0_1px_2px_rgba(19,32,58,0.06)] dark:shadow-none sm:p-6">
      <figcaption className="flex items-baseline justify-between gap-3">
        <span className="font-semibold text-ink">Release 2026.11.24</span>
        <span className="text-sm text-muted">example</span>
      </figcaption>
      <p className="mt-1 text-sm text-muted">Pipeline status: green</p>
      <ul className="mt-5 divide-y divide-line border-y border-line">
        {checks.map((check, i) => (
          <li key={check.label} className="verdict-step flex items-center justify-between gap-4 py-2.5 text-[0.95rem]" style={{ "--step": i } as React.CSSProperties}>
            <span className="text-body">{check.label}</span>
            <span className={"inline-flex items-center gap-2 font-medium " + (check.tone === "pass" ? "text-pass" : "text-warn")}>
              <span aria-hidden="true" className={"h-2 w-2 rounded-full " + (check.tone === "pass" ? "bg-pass" : "bg-warn")} />
              {check.state}
            </span>
          </li>
        ))}
      </ul>
      <div className="verdict-step mt-5 rounded-lg bg-warn-soft px-4 py-3" style={{ "--step": checks.length } as React.CSSProperties}>
        <p className="text-sm text-warn">Decision</p>
        <p className="text-xl font-semibold text-ink">Conditional GO</p>
        <p className="mt-1 text-sm text-body">10% rollout first. Rollback gate must pass before 100%.</p>
      </div>
      <p className="mt-4 text-sm text-muted">A green pipeline is not a release decision. Evidence is.</p>
    </figure>
  );
}

/* Kept for pages that still import it. */
export const ReleaseSignalCard = ReleaseVerdict;

export function BulletList({ items }: Readonly<{ items: string[]; color?: string }>) {
  return (
    <ul className="mt-3 space-y-1.5 text-[0.95rem] text-body">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span aria-hidden="true" className="mt-[0.6rem] h-1 w-1 shrink-0 rounded-full bg-muted" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function TagList({ items }: Readonly<{ items: string[]; tone?: string }>) {
  return (
    <div className="mt-3 flex flex-wrap content-start items-start gap-1.5">
      {items.map((item) => (
        <span key={item} className={tagClass}>{item}</span>
      ))}
    </div>
  );
}

type WorkItem = {
  title: string;
  company: string;
  date: string;
  location: string;
  status: string;
  description: string;
  highlights: string[];
  tools: { core: string[]; also: string[] };
};

/* Lists arrive ordered by priority. The first highlights and the core tools carry the visual weight. */
const TOP_HIGHLIGHTS = 3;

export function WorkTimeline({ items }: Readonly<{ items: WorkItem[] }>) {
  return (
    <ol className="border-t border-line">
      {items.map((item) => (
        <li key={item.company + item.date} className="grid gap-3 border-b border-line py-8 md:grid-cols-[13rem_minmax(0,1fr)] md:gap-10">
          <div className="text-[0.95rem]">
            <p className="font-medium text-ink">{item.date}</p>
            <p className="mt-1 text-muted">{item.location}</p>
          </div>
          <div className="max-w-4xl">
            <h3 className="text-xl font-semibold text-ink">{item.title}, {item.company}</h3>
            <p className="mt-3 text-body">{item.description}</p>

            <TagRow label="Core tools" items={item.tools.core} strong />

            <details className="group mt-5">
              <summary className="cursor-pointer text-[0.95rem] font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                Highlights and all tools
              </summary>
              <div className="mt-4 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
                <div>
                  <h4 className="text-sm font-medium text-muted">Highlights</h4>
                  <ul className="mt-2 space-y-1.5 text-[0.95rem]">
                    {item.highlights.map((highlight, i) => (
                      <li key={highlight} className="flex gap-2.5">
                        <span aria-hidden="true" className={"mt-[0.6rem] h-1.5 w-1.5 shrink-0 rounded-full " + (i < TOP_HIGHLIGHTS ? "bg-pass" : "bg-muted/60")} />
                        <span className={i < TOP_HIGHLIGHTS ? "font-medium text-ink" : "text-body"}>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {item.tools.also.length > 0 ? <TagRow label="Also used" items={item.tools.also} className="mt-0" /> : null}
              </div>
            </details>
          </div>
        </li>
      ))}
    </ol>
  );
}

function TagRow({ label, items, strong = false, className = "mt-4" }: Readonly<{ label: string; items: string[]; strong?: boolean; className?: string }>) {
  return (
    <div className={className}>
      <h4 className="text-sm font-medium text-muted">{label}</h4>
      <ul className="mt-2 flex flex-wrap content-start items-start gap-1.5">
        {items.map((item) => (
          <li key={item} className={strong ? tagStrongClass : tagClass}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export function SkillsMatrix({ groups }: Readonly<{ groups: Array<{ category: string; practicalUse: string; capabilities: string[] }> }>) {
  return (
    <div className="grid gap-x-10 gap-y-8 border-t border-line pt-8 md:grid-cols-2">
      {groups.map((group) => (
        <div key={group.category}>
          <h3 className="text-lg font-semibold text-ink">{group.category}</h3>
          <p className="mt-1.5 text-[0.95rem] text-body">{group.practicalUse}</p>
          <TagList items={group.capabilities} />
        </div>
      ))}
    </div>
  );
}

export function ProjectCard({ item }: Readonly<{ item: { title: string; status: string; problem: string; built: string; proves: string; tags: string[]; url?: string; role: string; currentStatus: string; nextStep: string } }>) {
  return (
    <Card className="flex flex-col">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
        <StatusBadge label={item.status} />
      </div>
      <p className="mt-3 text-[0.95rem] text-body">{item.built}</p>
      <dl className="mt-4 space-y-2 text-[0.95rem]">
        <div><dt className="inline font-medium text-ink">Problem: </dt><dd className="inline text-body">{item.problem}</dd></div>
        <div><dt className="inline font-medium text-ink">My role: </dt><dd className="inline text-body">{item.role}</dd></div>
        <div><dt className="inline font-medium text-ink">Next: </dt><dd className="inline text-body">{item.nextStep}</dd></div>
      </dl>
      <TagList items={item.tags} />
      {item.url ? <ExternalTextLink href={item.url} /> : null}
    </Card>
  );
}

export function WebsiteCard({ item }: Readonly<{ item: { title: string; url: string; type: string; status: string; description: string; proof: string[]; tags: string[] } }>) {
  return (
    <Card className="flex flex-col">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
          <p className="text-[0.95rem] text-muted">{item.type}</p>
        </div>
        <StatusBadge label={item.status} />
      </div>
      <p className="mt-3 text-[0.95rem] text-body">{item.description}</p>
      <BulletList items={item.proof} />
      <ExternalTextLink href={item.url} />
    </Card>
  );
}

function ExternalTextLink({ href }: Readonly<{ href: string; tone?: string }>) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="mt-4 inline-block break-all text-[0.95rem] font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
      {href.replace(/^https?:\/\//, "").replace(/\/$/, "")}
    </a>
  );
}

export function ContactLinks() {
  const links = [
    { label: "Email", value: profile.email, href: "mailto:" + profile.email },
    { label: "LinkedIn", value: "linkedin.com/in/jduris", href: profile.linkedin, external: true },
    { label: "GitHub", value: "github.com/JankoD84", href: profile.github, external: true },
    { label: "Upwork", value: "Hire me for a fixed-scope project", href: profile.upwork, external: true },
  ];
  return (
    <ul className="divide-y divide-line border-y border-line">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href} target={link.external ? "_blank" : undefined} rel={link.external ? "noreferrer" : undefined} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5 py-3 hover:text-ink">
            <span className="shrink-0 font-medium text-ink">{link.label}</span>
            <span className="min-w-0 text-[0.95rem] text-body [overflow-wrap:anywhere]">{link.value}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function ContactIconGroup() {
  return (
    <p className="text-[0.95rem] text-body">
      <a className="underline decoration-line underline-offset-4 hover:text-ink hover:decoration-ink" href={"mailto:" + profile.email}>Email</a>
      <span className="mx-2 text-line">/</span>
      <a className="underline decoration-line underline-offset-4 hover:text-ink hover:decoration-ink" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      <span className="mx-2 text-line">/</span>
      <a className="underline decoration-line underline-offset-4 hover:text-ink hover:decoration-ink" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
    </p>
  );
}

export function OpenToSection({ compact = false }: Readonly<{ compact?: boolean }>) {
  const list = (
    <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
      {openTo.map((item) => (
        <li key={item} className="flex gap-2.5 text-body">
          <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-pass" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
  if (compact) return <div className="mt-6">{list}</div>;
  return (
    <Section title="What I'm open to">
      {list}
    </Section>
  );
}

export function StatusBadge({ label }: Readonly<{ label: string; tone?: string }>) {
  return <span className="shrink-0 rounded border border-line bg-paper px-2 py-0.5 text-[0.8rem] font-medium text-body">{label}</span>;
}

export function PrimaryLink({ href, children }: Readonly<{ href: string; children: React.ReactNode }>) {
  return (
    <Link href={href} className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-2.5 font-medium text-on-ink hover:bg-ink-hover">
      {children}
    </Link>
  );
}

export function SecondaryLink({ href, children }: Readonly<{ href: string; children: React.ReactNode }>) {
  return (
    <Link href={href} className="inline-flex items-center justify-center rounded-md border border-ink/25 bg-surface px-5 py-2.5 font-medium text-ink hover:border-ink">
      {children}
    </Link>
  );
}
