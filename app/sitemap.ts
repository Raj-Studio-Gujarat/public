import type { MetadataRoute } from "next";
import { journalPosts } from "@/content/journal";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    "",
    "/portfolio",
    "/services",
    "/about",
    "/contact",
    "/journal",
  ].map((path) => ({
    url: `${base}${path || "/"}`,
    lastModified: now,
    changeFrequency:
      path === "" || path === "/portfolio" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const journal: MetadataRoute.Sitemap = journalPosts.map((post) => ({
    url: `${base}/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...journal];
}
