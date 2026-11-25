import type { Metadata } from "next";

import { certifications, languages, openTo, profile, projects, skills, workHistory } from "../content";
import { BeforeITSection, BulletList, Card, ContactLinks, PageHeader, ProjectCard, Section, SiteShell, SkillsMatrix, TagList, WorkTimeline } from "../components";

export const metadata: Metadata = {
  title: "CV — Ján Ďuriš",
  description: `${profile.name} — ${profile.title}`,
};

const cvSkills = skills.filter((group) => ["QA & Testing", "Automation", "E-commerce / Business Systems", "Engineering Tools", "CI/CD & DevOps", "AI / Internal Tools", "Product / Founder"].includes(group.category));

export default function CvPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="CV"
        title="CV — Ján Ďuriš"
        description={profile.title}
        intro="A web CV for recruiters, collaborators and QA/release-quality clients. No PDF download is available yet."
      />

      <Section eyebrow="Summary" title="Professional summary">
        <Card>
          <p className="text-sm leading-7 text-muted sm:text-base sm:leading-8">
            QA Engineer with 4+ years in software testing across enterprise software, broker web applications and e-commerce/internal business platforms. Current direction combines practical manual QA, regression testing, release validation, growing automation work, product QA and internal tooling through Dulvarn and Wildcode systems.
          </p>
        </Card>
      </Section>

      <Section eyebrow="Experience" title="Work experience">
        <WorkTimeline items={workHistory} />
      </Section>

      <BeforeITSection />

      <Section eyebrow="Certifications" title="Courses and certificates">
        <Card><BulletList items={certifications} /></Card>
      </Section>

      <Section eyebrow="Skills" title="Skills">
        <SkillsMatrix groups={cvSkills} />
      </Section>

      <Section eyebrow="Languages" title="Languages">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {languages.map((item) => (
            <Card key={item.language} className="p-4 sm:p-5">
              <h3 className="text-base font-semibold text-ink sm:text-lg">{item.language}</h3>
              <p className="mt-2 text-sm font-medium text-sky-200">{item.level}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section eyebrow="Projects" title="Selected projects">
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.title} item={project} />)}
        </div>
      </Section>

      <Section eyebrow="Contact" title="Contact">
        <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <h3 className="text-xl font-semibold text-ink">Direct contact</h3>
            <p className="mt-3 text-sm leading-7 text-muted">For direct or urgent contact, LinkedIn or email is the best option.</p>
            <div className="mt-5"><ContactLinks /></div>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold text-ink">Current fit</h3>
            <TagList items={openTo} />
          </Card>
        </div>
      </Section>
    </SiteShell>
  );
}
