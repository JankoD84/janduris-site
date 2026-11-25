import type { Metadata } from "next";
import { profile } from "./content";
import "./globals.css";

const siteTitle = `${profile.name} — ${profile.title}`;
const siteDescription = profile.message;
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
    siteName: profile.name,
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
