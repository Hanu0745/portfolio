import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type BadgeProps = ComponentPropsWithoutRef<"span"> & { tone?: "neutral" | "accent" | "success" };

const tones = {
  neutral: "border-border bg-surface-2 text-fg-secondary",
  accent: "border-accent/25 bg-accent-soft text-accent-text",
  success: "border-success/30 bg-success/10 text-success",
} as const;

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 font-mono text-[11px] leading-5 tracking-wide",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}

/** Small technology chip used in project cards and skill groups. */
export function Tag({ className, ...props }: ComponentPropsWithoutRef<"li">) {
  return (
    <li
      className={cn(
        "rounded-md border border-border bg-surface px-2.5 py-1 text-[13px] leading-5 text-fg-secondary",
        className,
      )}
      {...props}
    />
  );
}
