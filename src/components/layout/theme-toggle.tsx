"use client";

import { Moon, Sun } from "lucide-react";
import { useSyncExternalStore } from "react";
import { cn } from "@/lib/cn";

type Theme = "light" | "dark";

function readTheme(): Theme {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}

/** Subscribes to changes of the data-theme attribute set by the pre-paint script and by toggle(). */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function applyTheme(next: Theme) {
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* storage unavailable: theme still applies for this page view */
  }
}

export function ThemeToggle({ className }: { className?: string }) {
  // undefined on the server and during hydration, so both renders agree.
  const theme = useSyncExternalStore<Theme | undefined>(subscribe, readTheme, () => undefined);
  const label = theme === "dark" ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={() => applyTheme(readTheme() === "dark" ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-fg-secondary transition-colors hover:bg-surface-2 hover:text-fg",
        className,
      )}
    >
      {theme === undefined ? (
        <span className="h-4 w-4" aria-hidden />
      ) : theme === "dark" ? (
        <Sun className="h-4 w-4" aria-hidden />
      ) : (
        <Moon className="h-4 w-4" aria-hidden />
      )}
    </button>
  );
}
