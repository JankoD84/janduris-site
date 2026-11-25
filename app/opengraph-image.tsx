import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

/* Bundled font (latin + latin-ext for Ď, š), so the image never depends on a network font fetch at build time. */
async function plex() {
  const dir = join(process.cwd(), "node_modules/@fontsource/ibm-plex-sans/files");
  const load = (file: string) => readFile(join(dir, file));
  const [l4, l7, e4, e7] = await Promise.all([
    load("ibm-plex-sans-latin-400-normal.woff"),
    load("ibm-plex-sans-latin-700-normal.woff"),
    load("ibm-plex-sans-latin-ext-400-normal.woff"),
    load("ibm-plex-sans-latin-ext-700-normal.woff"),
  ]);
  return [
    { name: "IBM Plex Sans", data: l4, weight: 400 as const, style: "normal" as const },
    { name: "IBM Plex Sans", data: l7, weight: 700 as const, style: "normal" as const },
    { name: "IBM Plex Sans Ext", data: e4, weight: 400 as const, style: "normal" as const },
    { name: "IBM Plex Sans Ext", data: e7, weight: 700 as const, style: "normal" as const },
  ];
}

export const alt = "Ján Ďuriš — QA Automation & Playwright Engineer. I fix flaky tests and release-critical QA problems.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Share preview for LinkedIn, Upwork, Slack. Same story as the hero: who, what, and the release-verdict motif. */
export default async function OpengraphImage() {
  const checks: Array<[string, string, string]> = [
    ["Build", "Passed", "#1F7A52"],
    ["Unit and API tests", "Passed", "#1F7A52"],
    ["Checkout E2E", "Not executed", "#8A5A00"],
    ["Rollback with new schema", "Unknown", "#8A5A00"],
  ];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#F6F7F9", padding: "64px 72px", fontFamily: "IBM Plex Sans, IBM Plex Sans Ext" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: 640 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 28, color: "#687185" }}>Ján Ďuriš, QA Automation &amp; Playwright Engineer</div>
            <div style={{ fontSize: 64, fontWeight: 700, color: "#13203A", lineHeight: 1.08, marginTop: 24, letterSpacing: -1 }}>
              I fix flaky tests and release-critical QA problems.
            </div>
          </div>
          <div style={{ fontSize: 26, color: "#3A4357" }}>janduris.vercel.app</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "auto", width: 400, alignSelf: "center", background: "#FFFFFF", border: "2px solid #DCE1E8", borderRadius: 16, padding: 28 }}>
          <div style={{ fontSize: 24, fontWeight: 700, color: "#13203A" }}>Release 2026.11.24</div>
          <div style={{ fontSize: 18, color: "#687185", marginTop: 4, marginBottom: 12 }}>Pipeline status: green</div>
          {checks.map(([label, state, color]) => (
            <div key={label} style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #DCE1E8", padding: "10px 0", fontSize: 19 }}>
              <span style={{ color: "#3A4357" }}>{label}</span>
              <span style={{ color, fontWeight: 700 }}>{state}</span>
            </div>
          ))}
          <div style={{ display: "flex", flexDirection: "column", background: "#FBF0DA", borderRadius: 10, padding: "12px 16px", marginTop: 12 }}>
            <span style={{ fontSize: 16, color: "#8A5A00" }}>Decision</span>
            <span style={{ fontSize: 28, fontWeight: 700, color: "#13203A" }}>Conditional GO</span>
          </div>
        </div>
      </div>
    ),
    { ...size, fonts: await plex() },
  );
}
