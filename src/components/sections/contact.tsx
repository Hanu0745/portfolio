import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { profile } from "@/data/profile";
import { Reveal } from "@/components/motion/reveal";
import { Section } from "@/components/ui/section";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail, external: false },
  { label: "LinkedIn", value: "hanumanthu-buddha", href: profile.links.linkedin, icon: LinkedinIcon, external: true },
  { label: "GitHub", value: "Hanu0745", href: profile.links.github, icon: GithubIcon, external: true },
  { label: "Resume", value: "PDF", href: profile.resumeUrl, icon: FileText, external: true },
];

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border bg-bg-elevated">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <p className="mb-3 flex items-center gap-3 font-mono text-xs tracking-wider text-muted uppercase">
            <span className="text-accent-text">08</span>
            <span aria-hidden className="h-px w-6 bg-border-strong" />
            Contact
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            Let&rsquo;s build something useful.
          </h2>
          <p className="text-pretty mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {profile.availability}. If you are hiring for a team that ships AI-powered products, or you have a product that needs to go from idea to production, I would like to hear about it.
          </p>
          <p className="mt-4 text-sm text-muted">Based in {profile.location}. Open to remote work.</p>
        </Reveal>
        <Reveal delay={0.08}>
          <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
            {channels.map((channel) => (
              <li key={channel.label}>
                <a
                  href={channel.href}
                  {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex items-center gap-4 p-4 transition-colors hover:bg-surface-2 sm:p-5"
                >
                  <channel.icon className="h-5 w-5 text-accent-text" aria-hidden />
                  <span className="flex-1">
                    <span className="block font-mono text-[11px] tracking-wider text-muted uppercase">{channel.label}</span>
                    <span className="block text-sm font-medium text-fg sm:text-base">{channel.value}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
