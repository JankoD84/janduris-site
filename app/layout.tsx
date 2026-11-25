import type { Metadata, Viewport } from "next";
import "./globals.css";
import { pageMetadata, siteUrl } from "./seo";

const siteTitle = "Ján Ďuriš — QA Automation & Playwright Engineer";
const siteDescription =
  "I fix flaky tests and release-critical QA problems. QA Automation Engineer working with Playwright, TypeScript, Python, API testing and CI/CD. Available for freelance projects and remote roles.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  ...pageMetadata("/", siteTitle, siteDescription),
  authors: [{ name: "Ján Ďuriš", url: siteUrl }],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F6F7F9" },
    { media: "(prefers-color-scheme: dark)", color: "#0D131F" },
  ],
};

/* Runs before paint: saved choice wins, otherwise follow the system. Prevents a light flash in dark mode. */
const themeScript = `(function(){try{var t=localStorage.getItem("theme");var d=t?t==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
