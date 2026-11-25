import type { Metadata } from "next";

import { openSourceGroups, profile, projects } from "../content";
import { ExternalTextLink, PageHeader, ProjectCard, RepositoryCard, Section, SiteShell } from "../components";

export const metadata: Metadata = {
  title: "Projects — Ján Ďuriš",
  description: "Projects by Ján Ďuriš, including Dulvarn, Dulvarn Tools, Wildcode Studio and public QA automation and release engineering repos.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Projects"
        title="Systems that turn QA knowledge into working tools."
        description="Dulvarn, internal systems, AI workflow experiments and public QA automation and release engineering repos."
      />
      <Section eyebrow="Projects & Systems" title="Current and in-progress builder work.">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.title} item={project} />)}
        </div>
      </Section>
      <Section eyebrow="Open source" title="Public repositories">
        <div className="space-y-6">
          {openSourceGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 text-xl font-semibold text-ink">{group.title}</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {group.repos.map((item) => <RepositoryCard key={item.name} item={item} />)}
              </div>
            </div>
          ))}
        </div>
        <ExternalTextLink href={profile.github} />
      </Section>
    </SiteShell>
  );
}
