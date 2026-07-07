import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";
import { episodes } from "@/data/episodes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url.replace(/\/$/, "");
  const now = new Date();

  const staticRoutes = [
    "",
    "/episodes",
    "/portfolio",
    "/all",
    "/all/paper",
    "/sponsors",
    "/about",
  ].map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8,
    }),
  );

  const episodeRoutes = episodes.map((ep) => ({
    url: `${base}/episodes/${ep.number}`,
    lastModified: new Date(ep.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...episodeRoutes];
}
