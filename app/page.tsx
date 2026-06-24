import {
  about,
  buildingToward,
  capabilities,
  education,
  navigation,
  profile,
  projects,
  proofOfWork,
  signalBar,
  skills,
  websites,
  workHistory,
} from "./content";

const sectionEyebrow =
  "text-sm font-medium uppercase tracking-[0.22em] text-sky-300/80";
const sectionTitle =
  "mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl";
const cardClass =
  "rounded-lg border border-line bg-white/[0.045] p-6 shadow-soft backdrop-blur";
const tagClass =
  "rounded-md border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/75 backdrop-blur-xl">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="text-sm font-semibold tracking-wide text-ink">
            Janko Ďuriš
          </a>
          <div className="flex flex-wrap justify-end gap-x-4 gap-y-2 text-sm text-muted sm:gap-x-6">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-sky-100">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <section
        id="home"
        className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center px-6 pb-16 pt-32 sm:px-8 lg:px-10"
      >
        <div className="absolute inset-x-6 top-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-100">
              {profile.proofLine}
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-sky-300/80">
              {profile.name}
            </p>
            <h1 className="mt-5 text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
              {profile.title}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
              {profile.message}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
              >
                View Work
              </a>
              <a
                href="#projects"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/16 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06]"
              >
                See Projects
              </a>
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-emerald-200/20 px-5 py-3 text-sm font-semibold text-emerald-100 transition hover:border-emerald-200/40 hover:bg-emerald-300/[0.08]"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-sky-300/20 bg-sky-300/[0.07] p-5 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200">
              Current signal
            </p>
            <div className="mt-5 space-y-4 text-sm text-slate-200">
              <Metric label="Role" value="QA Engineer at Baťa" />
              <Metric label="Focus" value="Automation + release quality" />
              <Metric label="Building" value="Dulvarn release control" />
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {signalBar.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-white/10 bg-white/[0.04] p-4 text-sm text-slate-200"
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
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-200">
              Positioning
            </p>
            <p className="mt-4 text-2xl font-semibold leading-9 text-ink">
              QA engineer, automation learner, product builder.
            </p>
          </div>
          <div className={cardClass}>
            <div className="space-y-5 leading-8 text-muted">
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
            <article key={capability.title} className={cardClass + " min-h-48"}>
              <p className="text-sm font-semibold text-sky-200">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-ink">{capability.title}</h3>
              <p className="mt-3 leading-7 text-muted">{capability.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="work" eyebrow="Work Experience" title="A QA path from enterprise software to e-commerce release quality.">
        <div className="space-y-6">
          {workHistory.map((item) => (
            <article key={item.company + item.date} className="grid gap-4 md:grid-cols-[17rem_minmax(0,1fr)]">
              <div className="md:pr-10 md:text-right">
                <p className="inline-flex rounded-md border border-sky-300/20 bg-sky-300/10 px-3 py-1.5 text-sm font-medium text-sky-100">
                  {item.date}
                </p>
                <p className="mt-3 text-sm text-muted">{item.location}</p>
              </div>
              <div className={cardClass + " relative"}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-emerald-200">
                      {item.status}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-ink">
                      {item.title} — {item.company}
                    </h3>
                  </div>
                </div>
                <p className="mt-4 leading-7 text-muted">{item.description}</p>
                <div className="mt-6 grid gap-5 lg:grid-cols-2">
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
            <article key={group.category} className={cardClass + " lg:p-5"}>
              <h3 className="text-lg font-semibold text-ink">{group.category}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{group.practicalUse}</p>
              <div className="mt-5 flex flex-wrap gap-2">
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
        <p className="mb-8 max-w-3xl text-lg leading-8 text-muted">
          My work sits at the intersection of QA practice, automation, release quality and product building.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {proofOfWork.map((item) => (
            <article key={item.title} className={cardClass}>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="direction" eyebrow="Current Direction" title="Focused growth, shipped as useful tools.">
        <div className="rounded-lg border border-sky-300/20 bg-sky-300/[0.07] p-6 sm:p-8">
          <p className="max-w-3xl text-lg leading-8 text-muted">
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
            <article key={item.school} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <p className="text-sm font-medium text-sky-200">{item.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{item.school}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.program}</p>
              <p className="mt-4 leading-7 text-muted">{item.description}</p>
              {item.skills.length > 0 ? <TagList items={item.skills} /> : null}
            </article>
          ))}
        </div>
      </Section>

      <section
        id="contact"
        className="mx-auto w-full max-w-6xl px-6 py-20 sm:px-8 lg:px-10"
      >
        <div className="rounded-lg border border-sky-300/20 bg-sky-300/[0.07] p-8 sm:p-10">
          <p className={sectionEyebrow}>Contact</p>
          <h2 className={sectionTitle}>
            Interested in QA automation, release quality, or practical QA audits?
          </h2>
          <p className="mt-5 max-w-2xl leading-7 text-muted">
            I’m open to relevant QA automation, release quality, product QA and practical audit conversations.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <ContactLink href={"mailto:" + profile.email} label="Email" value={profile.email} />
            <ContactLink href={profile.linkedin} label="LinkedIn" value="linkedin.com/in/jduris" />
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
    <section id={id} className="mx-auto w-full max-w-6xl scroll-mt-24 px-6 py-16 sm:px-8 lg:px-10">
      <div className="mb-9 max-w-3xl">
        <p className={sectionEyebrow}>{eyebrow}</p>
        <h2 className={sectionTitle}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Metric({ label, value }: Readonly<{ label: string; value: string }>) {
  return (
    <div className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/80">{label}</p>
      <p className="mt-1 font-medium text-ink">{value}</p>
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
    <article className={cardClass + " flex flex-col"}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="max-w-xl text-xl font-semibold text-ink">{item.title}</h3>
        <StatusBadge label={item.status} />
      </div>
      <p className="mt-4 leading-7 text-muted">{item.description}</p>
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
    <article className="rounded-lg border border-emerald-200/15 bg-emerald-300/[0.045] p-6 shadow-soft">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-emerald-200">{item.type}</p>
          <h3 className="mt-2 text-2xl font-semibold text-ink">{item.title}</h3>
        </div>
        <StatusBadge label={item.status} tone="emerald" />
      </div>
      <p className="mt-4 leading-7 text-muted">{item.description}</p>
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-md border border-emerald-200/20 px-3 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-200/40 hover:bg-emerald-300/[0.08]"
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

function ContactLink({
  href,
  label,
  value,
}: Readonly<{
  href: string;
  label: string;
  value: string;
}>) {
  return (
    <a
      href={href}
      className="rounded-lg border border-white/10 bg-black/16 p-4 transition hover:border-white/24 hover:bg-white/[0.05]"
    >
      <span className="block text-sm font-medium text-sky-200">{label}</span>
      <span className="mt-1 block break-words text-sm text-slate-200">{value}</span>
    </a>
  );
}
