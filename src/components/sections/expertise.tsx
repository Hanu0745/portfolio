import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/motion/reveal";
import { Tag } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/ui/section";
import { cn } from "@/lib/cn";

export function Expertise() {
  return (
    <Section id="expertise" className="border-t border-border">
      <SectionHeader
        index="05"
        eyebrow="Technical expertise"
        title="Organized by the layer it runs in."
        lede="Only what I have used in production or shipped with. No percentage bars."
      />
      {/* Equal-height rows; the final group spans the full row so no cell is left empty. */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal
            key={group.title}
            delay={i * 0.04}
            className={cn("h-full", i === skillGroups.length - 1 && "md:col-span-2 lg:col-span-3")}
          >
            <div className="h-full rounded-xl border border-border bg-surface p-5 sm:p-6">
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
