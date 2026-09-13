import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";

interface CaseStudySectionProps {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}

/** Numbered section inside a case study. The id feeds the on-page table of contents. */
export function CaseStudySection({ id, index, title, children }: CaseStudySectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24 border-t border-border py-12 sm:py-16">
      <Reveal>
        <div className="mb-6 flex items-baseline gap-3 sm:mb-8">
          <p className="font-mono text-xs tracking-wider text-accent-text uppercase">{index}</p>
          <h2 id={`${id}-title`} className="text-xl font-semibold tracking-tight text-fg sm:text-2xl">
            {title}
          </h2>
        </div>
        <div className="min-w-0">{children}</div>
      </Reveal>
    </section>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-fg-secondary">
          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <p className="text-pretty max-w-2xl text-[15px] leading-relaxed text-fg-secondary sm:text-base">{children}</p>;
}
