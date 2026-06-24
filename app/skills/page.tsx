import type { Metadata } from "next";

import { languages, skills } from "../content";
import { Card, PageHeader, Section, SiteShell, SkillsMatrix } from "../components";

export const metadata: Metadata = {
  title: "Skills — Janko Ďuriš",
  description: "Skills matrix and languages for Janko Ďuriš.",
};

const visibleSkillGroups = skills.filter((group) => group.category !== "Engineering Stack");

export default function SkillsPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Skills"
        title="Skills Matrix"
        description="QA, automation, business systems, engineering tools, AI/internal tools, founder/product work and languages."
      />
      <Section eyebrow="Skills Matrix" title="What these skills are useful for in real work.">
        <SkillsMatrix groups={visibleSkillGroups} />
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
    </SiteShell>
  );
}
