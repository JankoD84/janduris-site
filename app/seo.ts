import type { Metadata } from "next";

export const siteUrl = "https://janduris.vercel.app";
export const siteName = "Ján Ďuriš";

/* Per-page canonical and Open Graph URL. Without this every page inherits the home URL
   and search engines treat subpages as duplicates of the home page. */
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Ján Ďuriš — QA Automation & Playwright Engineer. I fix flaky tests and release-critical QA problems.",
};

export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, siteName, type: "website", locale: "en_US", images: [shareImage] },
    twitter: { card: "summary_large_image", title, description, images: [shareImage.url] },
  };
}
