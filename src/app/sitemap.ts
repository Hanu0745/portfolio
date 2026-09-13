import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { caseStudyProjects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-13");
  return [
    { url: siteConfig.url, lastModified, changeFrequency: "monthly", priority: 1 },
    ...caseStudyProjects.map((project) => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: project.featured ? 0.9 : 0.7,
    })),
  ];
}
