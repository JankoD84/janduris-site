import { beforeIt, certifications, education, workHistory } from "../content";
import { PageHeader, Section, SiteShell, TagList, WorkTimeline } from "../components";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("/work", "Experience — Ján Ďuriš", "Work experience, education and certifications of Ján Ďuriš, QA Automation & Playwright Engineer.");

export default function WorkPage() {
  return (
    <SiteShell>
      <PageHeader
        title="Experience"
        description="Four years in QA across enterprise software, a broker web application and e-commerce, after sixteen years in sales and technical roles."
      />
      <Section title="QA and engineering">
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
      <Section title="Education and certifications">
        <div className="grid gap-10 md:grid-cols-2">
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
        </div>
      </Section>
    </SiteShell>
  );
}
