import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy as CaseStudyData, Project } from "@/types/content";
import { Architecture } from "@/components/diagrams/architecture";
import { Pipeline } from "@/components/diagrams/pipeline";
import { Tag } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { ExternalLink } from "@/components/ui/external-link";
import { ProjectLinks } from "@/components/ui/project-links";
import { BulletList, CaseStudySection, Prose } from "./case-study-section";
import { Challenges } from "./challenges";
import { Metrics } from "./metrics";
import { ScreenshotGallery } from "./screenshot-gallery";

type Project_ = Project & { caseStudy: CaseStudyData };

const toc = [
  ["overview", "Overview"],
  ["problem", "Problem"],
  ["product", "Product"],
  ["role", "My role"],
  ["architecture", "Architecture"],
  ["ai-workflow", "AI workflow"],
  ["implementation", "Implementation"],
  ["challenges", "Challenges & solutions"],
  ["quality", "Quality & evaluation"],
  ["screenshots", "Screenshots"],
  ["stack", "Technology stack"],
  ["outcome", "Outcome"],
  ["links", "Links"],
] as const;

export function CaseStudy({ project }: { project: Project_ }) {
  const cs = project.caseStudy;
  const hasImages = project.images.length > 0;
  const hasWorkflow = Boolean(cs.aiWorkflow?.length);
  const visibleToc = toc.filter(([id]) => {
    if (id === "screenshots") return hasImages;
    if (id === "ai-workflow") return hasWorkflow;
    return true;
  });
  let n = 0;
  const next = () => String(++n).padStart(2, "0");
  const workflow = cs.aiWorkflow ?? [];
  const modelStep = workflow.findIndex((step) => /LLM|grading/i.test(step.title));
  const modelStepIndex = modelStep >= 0 ? [modelStep] : [];

  return (
    <article>
      <header className="relative overflow-hidden border-b border-border">
        <div aria-hidden className="bg-grid mask-fade-b pointer-events-none absolute inset-0" />
        <Container className="relative py-14 sm:py-20">
          <Link href="/#projects" className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg">
            <ArrowLeft className="h-4 w-4" aria-hidden />
            All projects
          </Link>
          <div className="mt-8 flex items-center gap-4">
            {project.icon ? (
              <Image src={project.icon.src} alt="" width={56} height={56} className="h-14 w-14 rounded-2xl border border-border" />
            ) : null}
            <div>
              <p className="font-mono text-xs tracking-wider text-accent-text uppercase">Case study</p>
              <h1 className="mt-1 text-3xl font-semibold tracking-tight text-fg sm:text-4xl lg:text-5xl">{project.title}</h1>
            </div>
          </div>
          <p className="text-pretty mt-4 max-w-2xl text-lg text-muted sm:text-xl">{project.tagline}</p>

          <dl className="mt-8 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
            <Meta label="Role" value={project.role} />
            <Meta label="Status" value={project.statusLabel} />
            {project.period ? <Meta label="Year" value={project.period} /> : null}
            {project.organization ? (
              <Meta
                label="Organization"
                value={
                  project.organization.href ? (
                    <ExternalLink href={project.organization.href} className="text-accent-text hover:underline">
                      {project.organization.name}
                    </ExternalLink>
                  ) : (
                    project.organization.name
                  )
                }
              />
            ) : (
              <Meta label="Category" value={categoryLabel(project.category)} />
            )}
          </dl>

          <div className="mt-8">
            <ProjectLinks project={project} />
          </div>
        </Container>
      </header>

      <Container className="grid gap-10 lg:grid-cols-[12rem_1fr] lg:gap-16">
        <nav aria-label="On this page" className="hidden lg:block">
          <ol className="sticky top-24 space-y-2.5 py-14 text-sm">
            {visibleToc.map(([id, label], i) => (
              <li key={id}>
                <a href={`#${id}`} className="flex gap-3 text-muted transition-colors hover:text-fg">
                  <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="min-w-0 pb-16">
          <CaseStudySection id="overview" index={next()} title="Overview">
            <Prose>{cs.overview}</Prose>
            {project.organization?.note ? <p className="mt-4 text-sm text-muted">{project.organization.note}</p> : null}
            <div className="mt-8">
              <Metrics items={cs.metrics} />
            </div>
          </CaseStudySection>

          <CaseStudySection id="problem" index={next()} title="Problem">
            <Prose>{cs.problem}</Prose>
          </CaseStudySection>

          <CaseStudySection id="product" index={next()} title="Product">
            <BulletList items={cs.product} />
          </CaseStudySection>

          <CaseStudySection id="role" index={next()} title="My role">
            <BulletList items={cs.role} />
          </CaseStudySection>

          <CaseStudySection id="architecture" index={next()} title="Architecture">
            <Architecture layers={cs.architecture} />
          </CaseStudySection>

          {hasWorkflow ? (
            <CaseStudySection id="ai-workflow" index={next()} title="AI workflow">
              <Pipeline steps={workflow} emphasize={modelStepIndex} orientation="vertical" />
            </CaseStudySection>
          ) : null}

          <CaseStudySection id="implementation" index={next()} title="Technical implementation">
            <BulletList items={cs.implementation} />
          </CaseStudySection>

          <CaseStudySection id="challenges" index={next()} title="Key engineering challenges & solutions">
            <Challenges items={cs.challenges} />
          </CaseStudySection>

          <CaseStudySection id="quality" index={next()} title="Quality & evaluation">
            <BulletList items={cs.quality} />
          </CaseStudySection>

          {hasImages ? (
            <CaseStudySection id="screenshots" index={next()} title="Screenshots">
              <ScreenshotGallery images={project.images} productName={project.title} />
            </CaseStudySection>
          ) : null}

          <CaseStudySection id="stack" index={next()} title="Technology stack">
            <ul className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Tag key={tech} className="px-3 py-1.5 text-sm">
                  {tech}
                </Tag>
              ))}
            </ul>
          </CaseStudySection>

          <CaseStudySection id="outcome" index={next()} title="Outcome">
            <Prose>{cs.outcome}</Prose>
          </CaseStudySection>

          <CaseStudySection id="links" index={next()} title="Links">
            <ProjectLinks project={project} />
            {project.links.length === 0 ? (
              <p className="mt-3 text-sm text-muted">No public link is available for this project.</p>
            ) : null}
          </CaseStudySection>
        </div>
      </Container>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="bg-surface px-4 py-3">
      <dt className="font-mono text-[11px] tracking-wider text-muted uppercase">{label}</dt>
      <dd className="mt-1 text-sm font-medium text-fg">{value}</dd>
    </div>
  );
}

function categoryLabel(category: Project["category"]): string {
  switch (category) {
    case "ai-product":
      return "AI product";
    case "ai-platform":
      return "AI platform";
    case "web-platform":
      return "Web platform";
  }
}
