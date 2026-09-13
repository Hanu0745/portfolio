import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/motion/reveal";
import { Tag } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/cn";

/** Column spans that keep the 7-group grid fully filled at 2 and 3 columns. */
const spans: Record<number, string> = {
  0: "lg:col-span-2",
  3: "lg:col-span-2",
  6: "sm:col-span-2 lg:col-span-1",
};

export function Expertise() {
  return (
    <Section id="expertise" className="border-t border-border">
      <SectionHeader
        index="05"
        eyebrow="Technical expertise"
        title="Organized by the layer it runs in."
        lede="Only what I have used in production or shipped with. No percentage bars."
      />
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.04} className={cn("h-full", spans[i])}>
            <div className="h-full bg-surface p-5 sm:p-6">
              <div className="flex items-center gap-2.5">
                <group.icon className="h-4 w-4 text-accent-text" aria-hidden />
                <h3 className="text-sm font-semibold text-fg">{group.title}</h3>
              </div>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
