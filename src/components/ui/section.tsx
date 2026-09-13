import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./container";

type SectionProps = ComponentPropsWithoutRef<"section"> & { bleed?: boolean };

export function Section({ className, bleed, children, ...props }: SectionProps) {
  return (
    <section className={cn("py-20 sm:py-28", className)} {...props}>
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}

interface SectionHeaderProps {
  index: string;
  eyebrow: string;
  title: string;
  lede?: ReactNode;
  className?: string;
}

export function SectionHeader({ index, eyebrow, title, lede, className }: SectionHeaderProps) {
  return (
    <div className={cn("mb-12 max-w-2xl sm:mb-16", className)}>
      <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-wider text-muted uppercase">
        <span className="text-accent-text">{index}</span>
        <span aria-hidden className="h-px w-6 bg-border-strong" />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">{title}</h2>
      {lede ? <p className="text-pretty mt-4 text-base leading-relaxed text-muted sm:text-lg">{lede}</p> : null}
    </div>
  );
}
