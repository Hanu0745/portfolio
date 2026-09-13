import { ExternalLink as ExternalIcon, Globe, Lock, Play } from "lucide-react";
import type { Project } from "@/types/content";
import { buttonClasses } from "./button";

const icons = { store: Play, website: Globe, repo: ExternalIcon, other: ExternalIcon } as const;

interface ProjectLinksProps {
  project: Pick<Project, "links" | "sourceNote">;
  size?: "sm" | "md" | "lg";
  primaryFirst?: boolean;
}

/** Renders a project's outbound links. Shows the source note when there is no public repository. */
export function ProjectLinks({ project, size = "md", primaryFirst = true }: ProjectLinksProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {project.links.map((link, i) => {
        const Icon = icons[link.kind];
        const variant = primaryFirst && i === 0 ? "primary" : "secondary";
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses(variant, size)}
          >
            <Icon className="h-4 w-4" aria-hidden />
            {link.label}
          </a>
        );
      })}
      {project.sourceNote ? (
        <span className="inline-flex items-center gap-1.5 text-[13px] text-muted">
          <Lock className="h-3.5 w-3.5" aria-hidden />
          {project.sourceNote}
        </span>
      ) : null}
    </div>
  );
}
