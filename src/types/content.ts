import type { LucideIcon } from "lucide-react";

export type ProjectCategory = "ai-product" | "ai-platform" | "web-platform";

export type ProjectStatus = "live" | "delivered" | "internal" | "in-development";

export interface ProjectLink {
  label: string;
  href: string;
  kind: "store" | "website" | "repo" | "other";
}

export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Challenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ArchitectureNode {
  name: string;
  detail: string;
}

export interface ArchitectureLayer {
  title: string;
  nodes: ArchitectureNode[];
}

export interface PipelineStep {
  title: string;
  detail: string;
}

export interface CaseStudy {
  overview: string;
  problem: string;
  product: string[];
  role: string[];
  architecture: ArchitectureLayer[];
  /** Omit for products without an AI workflow. */
  aiWorkflow?: PipelineStep[];
  implementation: string[];
  challenges: Challenge[];
  quality: string[];
  outcome: string;
  metrics: Metric[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  category: ProjectCategory;
  status: ProjectStatus;
  statusLabel: string;
  period?: string;
  role: string;
  organization?: { name: string; href?: string; note?: string };
  description: string;
  highlights: string[];
  technologies: string[];
  featured: boolean;
  /** Set to false to keep an entry in the data file without rendering it. */
  published: boolean;
  sourceNote: string;
  links: ProjectLink[];
  images: ProjectImage[];
  icon?: ProjectImage;
  caseStudy?: CaseStudy;
}

export interface ExperienceEntry {
  title: string;
  organization?: string;
  location?: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
  technologies: string[];
}

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export interface EducationEntry {
  degree: string;
  field: string;
  institution: string;
  period: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  href?: string;
}

export interface Achievement {
  text: string;
}
