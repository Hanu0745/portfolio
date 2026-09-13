import { Award, BadgeCheck, GraduationCap } from "lucide-react";
import { achievements, certifications, education } from "@/data/education";
import { Reveal } from "@/components/motion/reveal";
import { ExternalLink } from "@/components/ui/external-link";
import { Section, SectionHeader } from "@/components/ui/section";

export function Education() {
  return (
    <Section id="education" className="border-t border-border">
      <SectionHeader index="07" eyebrow="Education & credentials" title="Background." />
      <div className="grid gap-5 lg:grid-cols-3">
        <Reveal className="h-full">
          <div className="h-full rounded-xl border border-border bg-surface p-6">
            <GraduationCap className="h-5 w-5 text-accent-text" aria-hidden />
            <h3 className="mt-4 font-mono text-[11px] tracking-wider text-muted uppercase">Education</h3>
            {education.map((entry) => (
              <div key={entry.institution} className="mt-3">
                <p className="text-base font-semibold text-fg">{entry.degree}</p>
                <p className="mt-0.5 text-sm text-fg-secondary">{entry.field}</p>
                <p className="mt-2 text-sm text-muted">
                  {entry.institution} · {entry.period}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.05} className="h-full">
          <div className="h-full rounded-xl border border-border bg-surface p-6">
            <BadgeCheck className="h-5 w-5 text-accent-text" aria-hidden />
            <h3 className="mt-4 font-mono text-[11px] tracking-wider text-muted uppercase">Certification</h3>
            {certifications.map((cert) => (
              <div key={cert.name} className="mt-3">
                <p className="text-base font-semibold text-fg">{cert.name}</p>
                <p className="mt-2 text-sm text-muted">
                  {cert.issuer} · {cert.year}
                </p>
                {cert.href ? (
                  <ExternalLink href={cert.href} className="mt-3 inline-block text-sm font-medium text-accent-text hover:underline">
                    Verify on Credly
                  </ExternalLink>
                ) : null}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <div className="h-full rounded-xl border border-border bg-surface p-6">
            <Award className="h-5 w-5 text-accent-text" aria-hidden />
            <h3 className="mt-4 font-mono text-[11px] tracking-wider text-muted uppercase">Achievements</h3>
            <ul className="mt-3 space-y-3">
              {achievements.map((item) => (
                <li key={item.text} className="flex gap-3 text-sm leading-relaxed text-fg-secondary">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
