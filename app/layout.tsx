import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Janko Ďuriš — QA Automation Engineer & Release Quality Builder",
  description:
    "Personal website of Janko Ďuriš, QA Engineer with 4+ years in software testing, focused on QA automation, release quality, QA workflows and AI-assisted engineering tools.",
  openGraph: {
    title: "Janko Ďuriš — QA Automation Engineer & Release Quality Builder",
    description:
      "Personal website of Janko Ďuriš, QA Engineer with 4+ years in software testing, focused on QA automation, release quality, QA workflows and AI-assisted engineering tools.",
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
