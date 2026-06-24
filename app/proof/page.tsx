import type { Metadata } from "next";

import { buildingToward, featuredProof, proofOfWork } from "../content";
import { Card, PageHeader, Section, SiteShell } from "../components";

export const metadata: Metadata = {
  title: "Proof of Work — Janko Ďuriš",
  description: "Proof of work for QA practice, automation direction, release quality and product building.",
};

export default function ProofPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Proof of Work"
        title="QA practice, automation direction and product building."
        description="Shareable proof for QA, product building and release quality work."
      />
      <Section eyebrow="Featured Proof" title="Shareable proof for QA, product building, and automation direction.">
        <div className="grid gap-4 md:grid-cols-3">
          {featuredProof.map((item) => (
            <Card key={item.title} className="min-h-0">
              <h2 className="text-lg font-semibold text-ink sm:text-xl">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="What This Shows" title="What this shows in real work.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {proofOfWork.map((item) => (
            <Card key={item.title}>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted sm:text-base">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>
      <Section eyebrow="Current Direction" title="Focused growth, shipped as useful tools.">
        <div className="rounded-lg border border-sky-300/[0.14] bg-sky-300/[0.055] p-6 shadow-soft transition duration-200 hover:border-sky-300/35 hover:bg-sky-300/[0.085] sm:p-8">
          <p className="max-w-3xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
            My current focus is becoming stronger as a QA Automation Engineer / SDET-oriented engineer while building practical release quality tools through Dulvarn.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {buildingToward.map((item) => <span key={item} className="rounded-md border border-sky-200/15 bg-black/15 px-3 py-2 text-sm text-sky-100">{item}</span>)}
          </div>
        </div>
      </Section>
    </SiteShell>
  );
}
