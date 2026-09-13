import { siteConfig } from "@/config/site";
import { profile } from "@/data/profile";
import { publishedProjects } from "@/data/projects";
import { skillGroups } from "@/data/skills";

/** Person structured data for search engines. Rendered once in the root layout. */
export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    email: `mailto:${profile.email}`,
    url: siteConfig.url,
    image: `${siteConfig.url}${profile.photo.src}`,
    address: { "@type": "PostalAddress", addressLocality: "Kakinada", addressCountry: "IN" },
    sameAs: [profile.links.github, profile.links.linkedin],
    knowsAbout: skillGroups.flatMap((group) => group.skills),
    alumniOf: { "@type": "CollegeOrUniversity", name: "Aditya Engineering College" },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "MongoDB Certified Developer, Associate",
      credentialCategory: "certification",
    },
    owns: publishedProjects
      .filter((p) => p.links.length > 0)
      .map((p) => ({ "@type": "SoftwareApplication", name: p.title, url: p.links[0]?.href, applicationCategory: "EducationalApplication" })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
