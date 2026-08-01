import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { pgListings } from "@/data/pg";
import { properties } from "@/data/properties";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/pg",
    "/real-estate",
    "/gallery",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const pgRoutes = pgListings.map((pg) => ({
    url: `${SITE_URL}/pg/${pg.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  const propertyRoutes = properties.map((p) => ({
    url: `${SITE_URL}/real-estate/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...pgRoutes, ...propertyRoutes];
}
