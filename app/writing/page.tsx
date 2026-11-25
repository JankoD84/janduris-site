import { allArticles, writingGroups } from "../content";
import { ArticleList, PageHeader, Section, SiteShell } from "../components";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata("/writing", "Writing — Ján Ďuriš", "Articles by Ján Ďuriš on release decisions, on-call, debugging and QA careers, published on CoderLegion.");

export default function WritingPage() {
  return (
    <SiteShell>
      <PageHeader
        title="Writing"
        description={`${allArticles.length} articles in ${writingGroups.length} series on release decisions, on-call and QA, published on CoderLegion.`}
      />
      {writingGroups.map((group) => (
        <Section key={group.topic} title={group.topic} lead={group.intro}>
          <ArticleList articles={group.articles} />
        </Section>
      ))}
    </SiteShell>
  );
}
