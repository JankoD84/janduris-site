import type { Metadata } from "next";

import { websites } from "../content";
import { PageHeader, Section, SiteShell, WebsiteCard } from "../components";

export const metadata: Metadata = {
  title: "Websites & Live Work — Janko Ďuriš",
  description: "Websites and live work by Janko Ďuriš, including Dulvarn, Dulvarn Tools and Wildcode docs.",
};

export default function WebsitesPage() {
  return (
    <SiteShell>
      <PageHeader
        eyebrow="Websites"
        title="Public-facing proof, not just a list of skills."
        description="Live websites and public work connected to QA, release quality and product building."
      />
      <Section eyebrow="Websites & Live Work" title="Live public work.">
        <div className="grid gap-4 lg:grid-cols-2">
          {websites.map((site) => <WebsiteCard key={site.url} item={site} />)}
        </div>
      </Section>
    </SiteShell>
  );
}
