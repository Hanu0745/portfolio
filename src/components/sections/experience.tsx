import { experience } from "@/data/experience";
import { Reveal } from "@/components/motion/reveal";
import { Tag } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/ui/section";

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border bg-bg-elevated">
      <SectionHeader index="06" eyebrow="Experience" title="Where the work happened." />
      <ol className="space-y-8">
        {experience.map((entry) => (
          <Reveal key={`${entry.title}-${entry.start}`}>
            <li className="grid gap-6 rounded-xl border border-border bg-surface p-6 sm:p-8 lg:grid-cols-[14rem_1fr] lg:gap-10">
              <div>
                <p className="font-mono text-xs tracking-wider text-muted uppercase">
                  {entry.start} — {entry.end}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-fg">{entry.title}</h3>
                {entry.organization ? <p className="mt-0.5 text-sm text-fg-secondary">{entry.organization}</p> : null}
                {entry.location ? <p className="text-sm text-muted">{entry.location}</p> : null}
                <p className="text-pretty mt-4 text-sm leading-relaxed text-muted">{entry.summary}</p>
              </div>
              <div>
                <ul className="space-y-3">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-fg-secondary">
                      <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-wrap gap-1.5" aria-label="Technologies">
                  {entry.technologies.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </ul>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
