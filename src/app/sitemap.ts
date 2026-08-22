import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

// Launch mode: only the season-premiere landing is public. Legacy routes are
// hidden behind redirects, so the sitemap lists just "/". Restore the fuller
// sitemap when the multi-page site comes back.
export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  return [
    {
      url: `${base}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
