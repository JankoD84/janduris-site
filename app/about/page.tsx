import { about } from "../content";
import { PageHeader, Section, SiteShell } from "../components";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("/about", "About — Ján Ďuriš", "About Ján Ďuriš, QA automation engineer and product builder focused on release quality.");

const facts = [
  "4+ years in QA: SolarWinds, Flowio, Baťa",
  "Focus: QA automation, CI/CD and release quality",
  "Building Dulvarn, a release-control system",
  "16 years in sales and technical roles before IT",
  "Based in Zlín, Czechia",
];

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader title="About me" description="QA automation engineer and product builder. Practical QA experience, now pointed at release quality and automation." />
      <Section title="The short version">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <div className="space-y-4 text-body">
            {about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <ul className="space-y-2 border-t border-line pt-4 text-[0.95rem] text-body lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            {facts.map((fact) => <li key={fact}>{fact}</li>)}
          </ul>
        </div>
      </Section>
    </SiteShell>
  );
}
