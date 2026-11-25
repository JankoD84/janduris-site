import Link from "next/link";

import { PageHeader, SiteShell } from "./components";

export const metadata = {
  title: "Page not found — Ján Ďuriš",
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <SiteShell>
      <PageHeader title="Page not found" description="This page doesn't exist or has moved. These are the places most people are looking for:" />
      <ul className="mx-auto w-full max-w-page space-y-2 px-5 pb-20 sm:px-8 lg:px-12 2xl:px-16 min-[1920px]:px-24">
        {[
          ["/", "Home"],
          ["/projects", "Projects and open-source tools"],
          ["/writing", "Writing"],
          ["/contact", "Contact"],
        ].map(([href, label]) => (
          <li key={href}>
            <Link href={href} className="font-medium text-ink underline decoration-line underline-offset-4 hover:decoration-ink">{label}</Link>
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}
