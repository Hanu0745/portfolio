/**
 * Site-wide configuration.
 *
 * SITE_URL drives canonical links, Open Graph URLs, the sitemap and robots.txt.
 * Set NEXT_PUBLIC_SITE_URL in your hosting provider (e.g. https://yourdomain.com).
 * On Vercel the production URL is picked up automatically as a fallback.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const siteConfig = {
  url: resolveSiteUrl(),
  name: "Hanumanthu Buddha",
  title: "Hanumanthu Buddha · Senior AI Full Stack Developer",
  description:
    "Senior AI Full Stack Developer building production AI products end to end: React, React Native, Node.js, MongoDB, real-time systems and LLM evaluation pipelines. Creator of Vaktora, an AI interview-prep app on Google Play.",
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
