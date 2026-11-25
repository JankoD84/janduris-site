import Link from "next/link";

import { focusAreas, openSource, profile, services, writing } from "./content";
import { PrimaryLink, ReleaseVerdict, SecondaryLink, Section, SiteShell } from "./components";

const repoUrl = (name: string) => `${profile.github}/${name}`;

export default function Home() {
  const featured = openSource.filter((repo) => repo.featured);

  return (
    <SiteShell>
      {/* Hero: who, what, how to hire — readable in five seconds */}
      <section className="border-b border-line">
        <div className="mx-auto grid w-full max-w-page gap-12 px-5 pb-14 pt-12 sm:px-8 lg:px-12 2xl:px-16 sm:pt-16 lg:grid-cols-[minmax(0,1fr)_25rem] lg:items-center lg:gap-16 xl:grid-cols-[minmax(0,1fr)_29rem] xl:gap-24 2xl:grid-cols-[minmax(0,1fr)_32rem] lg:pb-20 lg:pt-20">
          <div>
            <p className="text-[0.95rem] text-muted">
              {profile.name}, {profile.title}
            </p>
            <h1 className="mt-4 max-w-[17ch] text-[2.4rem] font-semibold leading-[1.08] tracking-[-0.02em] text-ink sm:text-[3.25rem] lg:text-[3.6rem] 2xl:text-[4.2rem]">
              {profile.headline}
            </h1>
            <p className="mt-6 max-w-[38rem] text-lg leading-relaxed text-body">{profile.message}</p>
            <p className="mt-3 max-w-[38rem] text-[0.95rem] text-muted">Hands-on with {profile.stack}.</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryLink href="/#hire">Hire me</PrimaryLink>
              <SecondaryLink href="/projects">See my work</SecondaryLink>
              <Link href="/cv" className="px-2 py-2.5 font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                View CV
              </Link>
            </div>

            <p className="mt-6 flex items-start gap-2.5 text-[0.95rem] text-body">
              <span aria-hidden="true" className="mt-[0.5rem] h-2 w-2 shrink-0 rounded-full bg-pass" />
              {profile.availability}. Based in {profile.location}.
            </p>
          </div>

          <ReleaseVerdict />
        </div>
      </section>

      {/* Proof: four facts, read as one line */}
      <section aria-label="At a glance" className="border-b border-line bg-surface">
        <dl className="mx-auto grid w-full max-w-page grid-cols-2 px-5 sm:px-8 lg:px-12 2xl:px-16 lg:grid-cols-4">
          {profile.proofItems.map((item, i) => (
            <div key={item.value} className={"py-6 pr-4 " + (i % 2 === 1 ? "pl-4 border-l border-line lg:pl-6 " : "") + (i >= 2 ? "border-t border-line lg:border-t-0 " : "") + (i === 2 ? "lg:border-l lg:pl-6 " : "") + (i === 3 ? "lg:pl-6 " : "")}>
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block text-xl font-semibold text-ink">{item.value}</span>
                <span className="mt-0.5 block text-[0.9rem] text-muted">{item.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <Section title="What I work on" lead="Three areas, one goal: a team that trusts its tests and knows why a release is safe to ship.">
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="border-t-2 border-ink pt-5">
              <h3 className="text-lg font-semibold text-ink">{area.title}</h3>
              <p className="mt-2 text-body">{area.description}</p>
              <ul className="mt-4 space-y-1 text-[0.95rem]">
                {area.repos.map((name) => (
                  <li key={name}>
                    <a href={repoUrl(name)} target="_blank" rel="noreferrer" className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-line bg-surface">
        <Section title="Open source you can run" lead="Real code, tests and CI. Clone any of them and run them in a few minutes.">
          <ul className="border-t border-line">
            {featured.map((repo) => (
              <li key={repo.name} className="grid gap-2 border-b border-line py-5 md:grid-cols-[16rem_minmax(0,1fr)_auto] md:items-baseline md:gap-8">
                <a href={repoUrl(repo.name)} target="_blank" rel="noreferrer" className="font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                  {repo.name}
                </a>
                <p className="text-body">{repo.description}</p>
                <p className="text-[0.85rem] text-muted md:text-right">{repo.tags.join(", ")}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6">
            <Link href="/projects" className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
              All {openSource.length} tools and projects
            </Link>
          </p>
        </Section>
      </section>

      <Section id="hire" title="Hire me" lead="Fixed scope, fixed price, done in days. You get pull requests and a short report, not a slide deck.">
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-line bg-surface p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-ink">{service.title}</h3>
              <p className="mt-1 text-body">{service.description}</p>
              <p className="mt-4 text-ink">
                <span className="text-2xl font-semibold">{service.price}</span>
                <span className="ml-2 text-[0.95rem] text-muted">{service.duration}</span>
              </p>
              <ul className="mt-5 space-y-2 border-t border-line pt-5 text-[0.95rem] text-body">
                {service.includes.map((line) => (
                  <li key={line} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-pass" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={profile.upwork} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-ink px-5 py-2.5 font-medium text-white hover:bg-[#0b1427]">
            Hire me on Upwork
          </a>
          <SecondaryLink href="/contact">Send a message</SecondaryLink>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="px-2 py-2.5 font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
            LinkedIn
          </a>
        </div>
        <p className="mt-6 text-[0.95rem] text-muted">
          Not ready to hire? Free checklists and kits for engineering teams are at{" "}
          <a href={profile.payhip} target="_blank" rel="noreferrer" className="text-ink underline decoration-line underline-offset-4 hover:decoration-ink">payhip.com/dulvarn</a>.
        </p>
      </Section>

      <section className="border-t border-line bg-surface">
        <Section id="writing" title="Writing">
          <ul className="border-t border-line">
            {writing.map((post) => (
              <li key={post.url} className="border-b border-line py-5">
                <a href={post.url} target="_blank" rel="noreferrer" className="group block">
                  <span className="text-lg font-semibold text-ink underline decoration-transparent underline-offset-4 group-hover:decoration-ink">{post.title}</span>
                  <span className="mt-1 block text-body">{post.summary}</span>
                  <span className="mt-1 block text-[0.85rem] text-muted">CoderLegion, {post.date}</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </section>
    </SiteShell>
  );
}
