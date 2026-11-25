import type { MetadataRoute } from "next";

import { siteUrl } from "./seo";

const routes: Array<{ path: string; priority: number }> = [
  { path: "/", priority: 1 },
  { path: "/projects", priority: 0.9 },
  { path: "/work", priority: 0.8 },
  { path: "/writing", priority: 0.8 },
  { path: "/contact", priority: 0.7 },
  { path: "/cv", priority: 0.6 },
  { path: "/about", priority: 0.5 },
  { path: "/skills", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority }) => ({ url: siteUrl + path, changeFrequency: "monthly", priority }));
}
