import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudy } from "@/components/case-study/case-study";
import { caseStudyProjects, getProject } from "@/data/projects";
import { profile } from "@/data/profile";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudyProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) return {};
  const title = `${project.title} case study`;
  const description = `${project.tagline}. ${project.role} on ${project.title}: ${project.caseStudy.overview.slice(0, 140)}…`;
  const images = project.images[0] ? [{ url: project.images[0].src, alt: project.images[0].alt }] : undefined;
  return {
    title,
    description,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: { title: `${title} · ${profile.name}`, description, type: "article", images },
    twitter: { card: images ? "summary_large_image" : "summary", title, description, images },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project?.caseStudy) notFound();
  return <CaseStudy project={{ ...project, caseStudy: project.caseStudy }} />;
}
