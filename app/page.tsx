import {
  experience,
  profile,
  projects,
  services,
  skills,
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
      <section className="relative mx-auto flex min-h-[88vh] w-full max-w-6xl flex-col justify-center px-6 py-20 sm:px-8 lg:px-10">
        <div className="absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-sm font-medium text-sky-100">
            {profile.trustLine}
          </p>
          <h1 className="text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-5 text-2xl font-medium text-white/88 sm:text-3xl">
            {profile.title}
          </p>
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
      </section>

      <Section id="what-i-do" eyebrow="What I Do" title="Practical quality work for teams that ship.">
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className={cardClass}>
              <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 leading-7 text-muted">{service.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Skills / Stack" title="QA depth with builder-friendly engineering skills.">
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

      <Section id="projects" eyebrow="Projects" title="Release quality tools and practical automation work.">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className={`${cardClass} flex flex-col`}>
              <h3 className="text-xl font-semibold text-ink">{project.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-muted">{project.description}</p>
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
              <a
                href={project.href}
                className="mt-6 inline-flex text-sm font-semibold text-sky-200 hover:text-sky-100"
              >
                Ask about this project
              </a>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Experience Snapshot" title="Honest progress from QA practice to release tooling.">
        <div className="grid gap-4 lg:grid-cols-3">
          {experience.map((item) => (
            <article key={item.title} className={cardClass}>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 leading-7 text-muted">{item.description}</p>
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
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <ContactLink href={`mailto:${profile.email}`} label="Email" value={profile.email} />
            <ContactLink href={profile.linkedin} label="LinkedIn" value="linkedin.com/in/jduris" />
            <ContactLink href="#" label="GitHub" value={profile.github} />
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
    <section id={id} className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-8 lg:px-10">
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
