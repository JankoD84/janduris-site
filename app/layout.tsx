import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Ján Ďuriš — QA Automation & Playwright Engineer";
const siteDescription =
  "I fix flaky tests and release-critical QA problems. QA Automation Engineer working with Playwright, TypeScript, Python, API testing and CI/CD. Available for freelance projects and remote roles.";
const siteUrl = "https://janduris.vercel.app/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Ján Ďuriš",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
