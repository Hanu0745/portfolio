import { ChevronDown } from "lucide-react";
import type { ArchitectureLayer } from "@/types/content";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/cn";

interface ArchitectureProps {
  layers: ArchitectureLayer[];
  className?: string;
}

/** Layered system diagram: one row per layer, nodes as cards, flow indicated between rows. */
export function Architecture({ layers, className }: ArchitectureProps) {
  return (
    <div className={cn("rounded-xl border border-border bg-surface-2/60 p-3 sm:p-5", className)}>
      <ol className="flex flex-col">
        {layers.map((layer, i) => (
          <li key={layer.title}>
            <Reveal delay={i * 0.05}>
              <div className="grid gap-3 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <p className="pt-2 font-mono text-[11px] tracking-wider text-muted uppercase">{layer.title}</p>
                <ul
                  className={cn(
                    "grid gap-3",
                    layer.nodes.length > 1 ? "sm:grid-cols-2 lg:grid-cols-3" : "",
                  )}
                >
                  {layer.nodes.map((node) => (
                    <li key={node.name} className="rounded-lg border border-border bg-surface p-3.5">
                      <p className="text-sm font-semibold text-fg">{node.name}</p>
                      <p className="mt-1 text-[13px] leading-relaxed text-muted">{node.detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            {i < layers.length - 1 ? (
              <div aria-hidden className="flex items-center gap-3 py-2 sm:pl-[9rem] sm:pr-0 sm:ml-6">
                <span className="h-px flex-1 bg-border" />
                <ChevronDown className="h-4 w-4 text-muted" />
                <span className="h-px flex-1 bg-border" />
              </div>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
