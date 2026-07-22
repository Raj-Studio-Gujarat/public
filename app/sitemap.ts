import type { MetadataRoute } from "next";
import { categoryLabels } from "@/content/portfolio";
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

  const portfolioCategories: MetadataRoute.Sitemap = Object.keys(categoryLabels)
    .filter((category) => category !== "all")
    .map((category) => ({
      url: `${base}/portfolio/${category}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }));

  const journal: MetadataRoute.Sitemap = journalPosts.map((post) => ({
    url: `${base}/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...portfolioCategories, ...journal];
}
