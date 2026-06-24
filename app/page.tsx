import {
  about,
  buildingToward,
  credibility,
  education,
  navigation,
  profile,
  projectBridge,
  projects,
  proofOfWork,
  services,
  skills,
  workHistory,
} from "./content";

const sectionEyebrow =
  "text-sm font-medium uppercase tracking-[0.22em] text-sky-300/80";
const sectionTitle =
  "mt-3 text-3xl font-semibold tracking-tight text-ink sm:text-4xl";
const cardClass =
  "rounded-lg border border-line bg-white/[0.045] p-6 shadow-soft backdrop-blur";

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
        className="relative mx-auto flex min-h-[92vh] w-full max-w-6xl flex-col justify-center px-6 pb-20 pt-32 sm:px-8 lg:px-10"
      >
        <div className="absolute inset-x-6 top-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-100">
            {profile.trustLine}
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
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-md bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/16 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {credibility.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-medium text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <Section id="about" eyebrow="About" title="QA engineer with a practical release-quality path.">
        <div className={cardClass}>
          <div className="space-y-5 text-lg leading-8 text-muted">
            {about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section id="help" eyebrow="What I Can Help With" title="Practical quality work for teams that ship.">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className={cardClass}>
              <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 leading-7 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills" title="QA depth with builder-friendly engineering skills.">
        <div className="grid gap-4 md:grid-cols-2">
          {skills.map((group) => (
            <article key={group.category} className={cardClass}>
              <h3 className="text-lg font-semibold text-ink">{group.category}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="work" eyebrow="Work History" title="From QA practice to automation and release tooling.">
        <div className="grid gap-4 lg:grid-cols-2">
          {workHistory.map((item) => (
            <article key={item.title} className={cardClass}>
              <p className="text-sm font-medium text-sky-200">{item.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{item.title}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.location}</p>
              <p className="mt-4 leading-7 text-muted">{item.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {item.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-300" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="education" eyebrow="Education" title="Training and technical foundation behind the QA path.">
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article key={item.school} className={cardClass}>
              <p className="text-sm font-medium text-sky-200">{item.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{item.school}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.program}</p>
              <p className="mt-4 leading-7 text-muted">{item.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" eyebrow="Projects" title="Proof-oriented projects around QA, automation, and product building.">
        <p className="mb-8 max-w-3xl text-lg leading-8 text-muted">{projectBridge}</p>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className={`${cardClass} flex flex-col`}>
              <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
              <p className="mt-3 leading-7 text-muted">{project.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-emerald-300/10 px-3 py-1.5 text-sm text-emerald-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm font-semibold text-sky-200">What it shows</p>
                <ul className="mt-3 space-y-2 text-sm text-slate-200">
                  {project.proof.map((proof) => (
                    <li key={proof} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                      <span>{proof}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="proof" eyebrow="Proof of Work" title="This website is more than a CV.">
        <p className="mb-8 max-w-3xl text-lg leading-8 text-muted">
          This website is not only a CV. It is a snapshot of practical work across QA,
          automation, product development and release quality tooling.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {proofOfWork.map((item) => (
            <article key={item.title} className={cardClass}>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="direction" eyebrow="Direction" title="What I’m Building Toward">
        <div className="rounded-lg border border-sky-300/20 bg-sky-300/[0.07] p-6 sm:p-8">
          <p className="max-w-3xl text-lg leading-8 text-muted">
            My current focus is becoming stronger as a QA Automation Engineer /
            SDET-oriented engineer while building practical release quality tools through Dulvarn.
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
            <ContactLink href={`mailto:${profile.email}`} label="Email" value={profile.email} />
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
