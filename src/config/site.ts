/**
 * Site-wide configuration.
 *
 * SITE_URL drives canonical links, Open Graph URLs, the sitemap and robots.txt.
 * The production domain is the default; NEXT_PUBLIC_SITE_URL overrides it for
 * previews or a future move.
 */
const PRODUCTION_URL = "https://hanu.kaziva.in";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  return PRODUCTION_URL;
}

export const siteConfig = {
  url: resolveSiteUrl(),
  name: "Hanumanthu Buddha",
  title: "Hanumanthu Buddha · AI Full Stack Developer",
  description:
    "AI Full Stack Developer building production AI products end to end: React, React Native, Node.js, MongoDB, real-time systems and LLM evaluation pipelines. Creator of Vaktora, an AI interview-prep app on Google Play.",
  keywords: [
    "Hanumanthu Buddha",
    "AI Full Stack Developer",
    "Full Stack Developer",
    "AI Developer",
    "Generative AI Developer",
    "React Developer",
    "React Native Developer",
    "Node.js Developer",
    "MongoDB",
    "LLM integration",
    "Vaktora",
    "Kakinada",
  ],
  locale: "en_IN",
} as const;

export const navItems = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "AI", href: "/#ai-engineering" },
  { label: "Contact", href: "/#contact" },
] as const;
