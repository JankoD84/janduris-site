import type { Metadata } from "next";

import { education, workHistory } from "../content";
import { Card, PageHeader, Section, SiteShell, TagList, WorkTimeline } from "../components";

export const metadata: Metadata = {
  title: "Work Experience — Janko Ďuriš",
  description: "Work experience timeline and education for Janko Ďuriš, QA engineer.",
};

export default function WorkPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Work Experience"
        title="A QA path from enterprise software to e-commerce release quality."
        description="Work experience timeline, education and practical QA foundation."
      />
      <Section eyebrow="Timeline" title="Work Experience">
        <WorkTimeline items={workHistory} />
      </Section>
      <Section eyebrow="Education" title="Training and technical foundation.">
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <Card key={item.school} className="overflow-hidden">
              <p className="text-sm font-medium text-sky-200">{item.date}</p>
              <h3 className="mt-2 text-xl font-semibold text-ink">{item.school}</h3>
              <p className="mt-1 text-sm text-slate-300">{item.program}</p>
              <p className="mt-4 text-sm leading-7 text-muted sm:text-base">{item.description}</p>
              {item.skills.length > 0 ? <TagList items={item.skills} /> : null}
            </Card>
          ))}
        </div>
      </Section>
    </SiteShell>
  );
}
