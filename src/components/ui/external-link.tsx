import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

/** Anchor for off-site links. Always opens in a new tab with safe rel attributes. */
export function ExternalLink({ className, children, ...props }: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={cn("transition-colors hover:text-fg", className)}
      {...props}
    >
      {children}
    </a>
  );
}
