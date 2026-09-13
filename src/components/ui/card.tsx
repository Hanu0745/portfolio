import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type CardProps = ComponentPropsWithoutRef<"div"> & { interactive?: boolean };

export function Card({ className, interactive, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-border bg-surface",
        interactive && "transition-[border-color,box-shadow] duration-200 hover:border-border-strong hover:shadow-card",
        className,
      )}
      {...props}
    />
  );
}
