import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { featuredProject } from "@/data/projects";
import { Reveal } from "@/components/motion/reveal";
import { Badge, Tag } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { ProjectLinks } from "@/components/ui/project-links";
import { Section, SectionHeader } from "@/components/ui/section";

export function FeaturedProject() {
  const project = featuredProject;
  if (!project) return null;
  const shots = project.images.slice(0, 3);

  return (
    <Section id="featured" className="border-t border-border bg-bg-elevated">
      <SectionHeader
        index="02"
        eyebrow="Featured product"
        title="Vaktora: an AI interview coach, built end to end."
        lede="The flagship example of what I do: a mobile product with a real-time backend, an asynchronous LLM evaluation pipeline and a production release process."
      />

      <Reveal>
        <article className="overflow-hidden rounded-2xl border border-border bg-surface shadow-card">
          <div className="grid lg:grid-cols-[1fr_1.05fr]">
            <div className="flex flex-col p-6 sm:p-8 lg:p-10">
              <div className="flex items-center gap-3">
                {project.icon ? (
                  <Image
                    src={project.icon.src}
                    alt=""
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-xl border border-border"
                  />
                ) : null}
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight text-fg">{project.title}</h3>
                  <p className="text-sm text-muted">{project.tagline}</p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                <Badge tone="success">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
                  {project.statusLabel}
                </Badge>
                <Badge>{project.role}</Badge>
                {project.period ? <Badge>{project.period}</Badge> : null}
              </div>

              <p className="text-pretty mt-6 text-[15px] leading-relaxed text-fg-secondary">{project.description}</p>

              <ul className="mt-6 space-y-2.5">
                {project.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed text-fg-secondary">
                    <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <ButtonLink href={`/projects/${project.slug}`} size="lg">
                  View Case Study
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </ButtonLink>
                <ProjectLinks project={{ links: project.links, sourceNote: "" }} primaryFirst={false} size="lg" />
              </div>
              <p className="mt-4 text-[13px] text-muted">{project.sourceNote}</p>
            </div>

            <Link
              href={`/projects/${project.slug}`}
              aria-label={`Open the ${project.title} case study`}
              className="group relative flex items-center justify-center overflow-hidden border-t border-border bg-[#0b1530] px-6 py-10 lg:border-t-0 lg:border-l"
            >
              <div aria-hidden className="bg-grid absolute inset-0 opacity-40 [--grid-line:rgba(255,255,255,0.08)]" />
              <div className="relative flex items-center gap-3 sm:gap-4">
                {shots.map((img, i) => (
                  <div
                    key={img.src}
                    className={
                      i === 1
                        ? "w-40 sm:w-48 lg:w-52 transition-transform duration-300 group-hover:-translate-y-1"
                        : "hidden w-36 sm:block sm:w-40 lg:w-44 translate-y-8 opacity-90 transition-transform duration-300 group-hover:translate-y-6"
                    }
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      sizes="(min-width: 1024px) 208px, 192px"
                      className="rounded-xl border border-white/10 shadow-2xl"
                    />
                  </div>
                ))}
              </div>
            </Link>
          </div>
        </article>
      </Reveal>
    </Section>
  );
}
