import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Janko Ďuriš — QA Automation Engineer & Release Quality Builder";
const siteDescription =
  "QA Engineer with 4+ years in software testing, focused on QA automation, release quality, QA workflows, CI/CD quality checks and AI-assisted engineering tools.";
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
    siteName: "Janko Ďuriš",
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
