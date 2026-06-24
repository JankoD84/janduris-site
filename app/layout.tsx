import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Janko Ďuriš — QA Automation Engineer & Release Quality Builder",
  description:
    "Personal website of Janko Ďuriš, QA Automation Engineer focused on release quality, QA automation and AI-assisted engineering tools.",
  openGraph: {
    title: "Janko Ďuriš — QA Automation Engineer & Release Quality Builder",
    description:
      "Personal website of Janko Ďuriš, QA Automation Engineer focused on release quality, QA automation and AI-assisted engineering tools.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
