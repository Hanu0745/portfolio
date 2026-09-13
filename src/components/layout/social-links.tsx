import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { profile } from "@/data/profile";
import { cn } from "@/lib/cn";

const items = [
  { label: "GitHub", href: profile.links.github, icon: GithubIcon, external: true },
  { label: "LinkedIn", href: profile.links.linkedin, icon: LinkedinIcon, external: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail, external: false },
] as const;

export function SocialLinks({ className, showLabels = false }: { className?: string; showLabels?: boolean }) {
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {items.map(({ label, href, icon: Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={showLabels ? undefined : label}
            title={label}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={cn(
              "inline-flex h-9 items-center justify-center gap-2 rounded-md border border-border bg-surface text-fg-secondary transition-colors hover:bg-surface-2 hover:text-fg",
              showLabels ? "px-3 text-sm" : "w-9",
            )}
          >
            <Icon className="h-4 w-4" aria-hidden />
            {showLabels ? label : null}
          </a>
        </li>
      ))}
    </ul>
  );
}
