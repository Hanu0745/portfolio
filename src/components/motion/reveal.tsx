"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in seconds, useful for staggering siblings. */
  delay?: number;
}

/**
 * Fades and lifts content into view once as it enters the viewport.
 *
 * The hidden state is applied purely in CSS and only when the <html> element
 * carries the "js" class (set before first paint), so content is always visible
 * without JavaScript, for crawlers, and when reduced motion is preferred.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Anything already at or above the viewport (initial load, hash navigation) shows at once.
    const alreadyVisible = el.getBoundingClientRect().top < window.innerHeight * 0.95;
    if (alreadyVisible || !("IntersectionObserver" in window)) {
      el.setAttribute("data-shown", "");
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.setAttribute("data-shown", "");
            observer.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = delay ? ({ "--reveal-delay": `${delay}s` } as CSSProperties) : undefined;

  return (
    <div ref={ref} className={cn("reveal", className)} style={style}>
      {children}
    </div>
  );
}
