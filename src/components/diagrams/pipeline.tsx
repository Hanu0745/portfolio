import { ArrowDown, ArrowRight } from "lucide-react";
import type { PipelineStep } from "@/types/content";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";

interface PipelineProps {
  steps: PipelineStep[];
  className?: string;
  /** Indexes of steps whose card should be visually emphasised (e.g. the LLM step). */
  emphasize?: number[];
  /**
   * "responsive": vertical on small screens, left-to-right from lg.
   * "vertical": always top-to-bottom with wide cards (used in case studies).
   */
  orientation?: "responsive" | "vertical";
}

export function Pipeline({ steps, className, emphasize = [], orientation = "responsive" }: PipelineProps) {
  const horizontal = orientation === "responsive";
  return (
    <ol className={cn("flex flex-col gap-2", horizontal && "lg:flex-row lg:items-stretch lg:gap-0", className)}>
      {steps.map((step, i) => {
        const strong = emphasize.includes(i);
        const last = i === steps.length - 1;
        return (
          <li key={step.title} className={cn("flex min-w-0 flex-col", horizontal && "lg:flex-1 lg:flex-row lg:items-stretch")}>
            <Reveal delay={i * 0.06} className="min-w-0 flex-1">
              <div
                className={cn(
                  "h-full rounded-lg border p-4",
                  strong ? "border-accent/40 bg-accent-soft" : "border-border bg-surface",
                  !horizontal && "sm:grid sm:grid-cols-[3rem_14rem_1fr] sm:items-baseline sm:gap-4 sm:p-5",
                )}
              >
                <p className={cn("font-mono text-[11px] tracking-wider text-muted uppercase", horizontal && "mb-2")}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className={cn("text-sm font-semibold", strong ? "text-accent-text" : "text-fg", !horizontal && "mt-1 sm:mt-0")}>
                  {step.title}
                </p>
                <p className={cn("text-[13px] leading-relaxed text-muted", horizontal ? "mt-1.5" : "mt-1.5 sm:mt-0 sm:text-sm")}>
                  {step.detail}
                </p>
              </div>
            </Reveal>
            {!last ? (
              <span aria-hidden className={cn("flex items-center justify-center py-1 text-muted", horizontal && "lg:w-8 lg:py-0")}>
                <ArrowDown className={cn("h-4 w-4", horizontal && "lg:hidden")} />
                {horizontal ? <ArrowRight className="hidden h-4 w-4 lg:block" /> : null}
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}
