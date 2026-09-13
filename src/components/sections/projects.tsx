import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types/content";
import { secondaryProjects } from "@/data/projects";
import { Reveal } from "@/components/motion/reveal";
import { Badge, Tag } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ProjectLinks } from "@/components/ui/project-links";
import { Section, SectionHeader } from "@/components/ui/section";

function ProjectCard({ project }: { project: Project }) {
  const hasCaseStudy = Boolean(project.caseStudy);
  return (
    <Card interactive className="flex h-full flex-col p-6 sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold tracking-tight text-fg">
            {hasCaseStudy ? (
              <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-accent-text">
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h3>
          <p className="mt-1 text-sm text-muted">{project.tagline}</p>
        </div>
        <Badge tone={project.status === "delivered" ? "accent" : "neutral"}>{project.statusLabel}</Badge>
      </div>

      <p className="text-pretty mt-4 text-[15px] leading-relaxed text-fg-secondary">{project.description}</p>

      <ul className="mt-5 space-y-2">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-secondary">
            <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <p className="mb-2 font-mono text-[11px] tracking-wider text-muted uppercase">Role · {project.role}</p>
        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
          {hasCaseStudy ? (
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-accent-text hover:underline"
            >
              Read case study
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          ) : null}
          <ProjectLinks project={project} size="sm" primaryFirst={false} />
        </div>
      </div>
    </Card>
  );
}

export function Projects() {
  return (
    <Section id="projects" className="border-t border-border">
      <SectionHeader
        index="03"
        eyebrow="Selected work"
        title="More production systems."
        lede="Projects chosen for technical depth and real-world use. Where the code is private, the work is presented as a case study."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {secondaryProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06} className="h-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
