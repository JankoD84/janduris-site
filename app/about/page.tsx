import type { Metadata } from "next";

import { about, beyondTheWork } from "../content";
import { Card, PageHeader, Section, SiteShell } from "../components";

export const metadata: Metadata = {
  title: "About — Ján Ďuriš",
  description: "About Ján Ďuriš, QA engineer, product builder and release quality-focused founder.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="About"
        title="About me"
        description="Practical QA experience, now pointed at release quality, automation and useful internal tools."
        intro="A short professional story about the path from tester training to enterprise QA, e-commerce quality and product building."
      />

      <Section eyebrow="Positioning" title="QA automation engineer and product builder.">
        <div className="grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <Card className="self-start">
            <p className="text-sm font-semibold text-ink">Positioning</p>
            <div className="mt-5 grid gap-2 text-sm text-body">
              {["QA automation", "CI/CD and release quality", "Product builder", "16 years in sales and technical roles before IT"].map((item) => (
                <span key={item} className="rounded-md bg-surface px-3 py-2">{item}</span>
              ))}
            </div>
          </Card>
          <Card>
            <div className="space-y-4 text-sm leading-7 text-muted sm:space-y-5 sm:text-base sm:leading-8">
              {about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </Card>
        </div>
      </Section>

      <Section eyebrow="Human Side" title="Beyond the Work">
        <div className="rounded-lg border border-line bg-surface p-5 sm:p-7 lg:p-8">
          <div className="max-w-3xl space-y-4 text-sm leading-7 text-body sm:text-base sm:leading-8">
            {beyondTheWork.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {beyondTheWork.cards.map((item) => (
              <article key={item.title} className="rounded-lg border border-line bg-surface p-4 transition duration-200 hover:border-line hover:bg-surface sm:p-5">
                <h3 className="text-base font-semibold text-ink sm:text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
