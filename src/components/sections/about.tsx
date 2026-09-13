import { profile } from "@/data/profile";
import { Reveal } from "@/components/motion/reveal";
import { Section, SectionHeader } from "@/components/ui/section";

const focusAreas = [
  { title: "Product engineering", detail: "React and React Native interfaces backed by Node.js REST services and MongoDB data models." },
  { title: "Real-time & async systems", detail: "Socket.IO sessions, Redis caching and BullMQ job pipelines that keep APIs responsive under load." },
  { title: "Applied AI", detail: "LLM evaluation pipelines, speech-to-text, model routing with fallbacks, and comparison of model outputs." },
  { title: "Delivery", detail: "Docker, CI/CD and Google Play releases, with auth and role-based access designed in from the start." },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader index="01" eyebrow="Engineering profile" title="Full-stack ownership, from schema to store listing." />
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal className="space-y-5 text-base leading-relaxed text-fg-secondary sm:text-[17px]">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="text-pretty">
              {paragraph}
            </p>
          ))}
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
            {focusAreas.map((area, i) => (
              <li key={area.title} className="flex gap-4 p-4 sm:p-5">
                <span className="font-mono text-xs text-accent-text">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="text-sm font-semibold text-fg">{area.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{area.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
