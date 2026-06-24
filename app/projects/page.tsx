import type { Metadata } from "next";

import { projects } from "../content";
import { PageHeader, ProjectCard, Section, SiteShell } from "../components";

export const metadata: Metadata = {
  title: "Projects — Janko Ďuriš",
  description: "Projects by Janko Ďuriš, including Dulvarn, Dulvarn Tools, Wildcode Studio and automation portfolio work.",
};

export default function ProjectsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Projects"
        title="Systems that turn QA knowledge into working tools."
        description="Dulvarn, internal systems, AI workflow experiments and automation portfolio work."
      />
      <Section eyebrow="Projects & Systems" title="Current and in-progress builder work.">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.title} item={project} />)}
        </div>
      </Section>
    </SiteShell>
  );
}
