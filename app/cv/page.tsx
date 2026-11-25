import type { Metadata } from "next";

import { beforeIt, certifications, education, languages, openSource, profile, skills, workHistory } from "../content";
import { ContactLinks, PageHeader, Section, SiteShell, SkillsMatrix, TagList, WorkTimeline } from "../components";

export const metadata: Metadata = {
  title: "CV — Ján Ďuriš",
  description: "CV of Ján Ďuriš, QA Automation & Playwright Engineer: Playwright, TypeScript, Python, API testing and CI/CD.",
};

const cvSkills = skills.filter((group) => ["QA & Testing", "Automation", "CI/CD & DevOps", "Engineering Tools", "AI / Internal Tools"].includes(group.category));

export default function CvPage() {
  return (
    <SiteShell>
      <PageHeader
        title={`${profile.name}, ${profile.title}`}
        description={profile.message}
        intro={`${profile.location}. ${profile.availability}.`}
      />

      <Section title="Experience">
        <WorkTimeline items={workHistory} />
      </Section>

      <section className="border-t border-line bg-surface">
        <Section title="Before IT" lead={beforeIt.intro}>
          <ul className="border-t border-line">
            {beforeIt.roles.map((role) => (
              <li key={role.company + role.date} className="grid gap-1 border-b border-line py-3 sm:grid-cols-[13rem_minmax(0,1fr)] sm:gap-10">
                <span className="text-[0.95rem] text-muted">{role.date}</span>
                <span className="text-ink">{role.title}, {role.company}</span>
              </li>
            ))}
          </ul>
        </Section>
      </section>

      <Section title="Skills">
        <SkillsMatrix groups={cvSkills} />
      </Section>

      <section className="border-y border-line bg-surface">
        <Section title="Open source">
          <ul className="border-t border-line">
            {openSource.map((repo) => (
              <li key={repo.name} className="grid gap-1 border-b border-line py-3 md:grid-cols-[15rem_minmax(0,1fr)] md:gap-8">
                <a href={`${profile.github}/${repo.name}`} target="_blank" rel="noreferrer" className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">{repo.name}</a>
                <span className="text-body">{repo.description}</span>
              </li>
            ))}
          </ul>
        </Section>
      </section>

      <Section title="Education, certifications and languages">
        <div className="grid gap-10 md:grid-cols-3">
          <ul className="border-t border-line">
            {education.map((item) => (
              <li key={item.school} className="border-b border-line py-4">
                <p className="font-semibold text-ink">{item.school}</p>
                <p className="text-body">{item.program}</p>
                <p className="text-[0.9rem] text-muted">{item.date}</p>
                {item.skills.length > 0 ? <TagList items={item.skills} /> : null}
              </li>
            ))}
          </ul>
          <ul className="border-t border-line">
            {certifications.map((cert) => (
              <li key={cert.title} className="border-b border-line py-4">
                <p className="font-semibold text-ink">{cert.title}</p>
                <p className="text-[0.9rem] text-muted">{cert.issuer}, {cert.year}</p>
              </li>
            ))}
          </ul>
          <ul className="border-t border-line">
            {languages.map((item) => (
              <li key={item.language} className="flex justify-between border-b border-line py-4">
                <span className="font-semibold text-ink">{item.language}</span>
                <span className="text-body">{item.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="border-t border-line bg-surface">
        <Section title="Contact">
          <div className="max-w-xl">
            <ContactLinks />
          </div>
        </Section>
      </section>
    </SiteShell>
  );
}
