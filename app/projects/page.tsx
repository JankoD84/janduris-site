import { openSource, profile, projects } from "../content";
import { PageHeader, ProjectCard, Section, SiteShell } from "../components";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("/projects", "Projects — Ján Ďuriš", "Open-source QA, CI/CD and ops tools by Ján Ďuriš, plus Dulvarn and other products.");

const groups = ["Test automation", "CI/CD and release quality", "Ops tooling"];

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHeader
        title="Projects"
        description="Open-source tools and demos you can run today, and the products I'm building around release quality."
      />
      <Section title="Open source" lead={`All public on GitHub under ${profile.github.replace("https://", "")}, with tests and CI.`}>
        <div className="space-y-12">
          {groups.map((group) => (
            <div key={group}>
              <h3 className="text-lg font-semibold text-ink">{group}</h3>
              <ul className="mt-3 border-t border-line">
                {openSource.filter((repo) => repo.group === group).map((repo) => (
                  <li key={repo.name} className="grid gap-1.5 border-b border-line py-4 md:grid-cols-[15rem_minmax(0,1fr)_auto] md:items-baseline md:gap-8">
                    <a href={`${profile.github}/${repo.name}`} target="_blank" rel="noreferrer" className="font-semibold text-ink underline decoration-line underline-offset-4 hover:decoration-ink">
                      {repo.name}
                    </a>
                    <p className="text-body">{repo.description}</p>
                    <p className="text-[0.85rem] text-muted md:text-right">{repo.tags.join(", ")}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>
      <section className="border-t border-line bg-surface">
        <Section title="Products and systems" lead="Longer-running work: a release-control product, a tools line and internal systems.">
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => <ProjectCard key={project.title} item={project} />)}
          </div>
        </Section>
      </section>
    </SiteShell>
  );
}
