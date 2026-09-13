import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/motion/reveal";
import { Tag } from "@/components/ui/badge";
import { Section, SectionHeader } from "@/components/ui/section";

export function Expertise() {
  return (
    <Section id="expertise" className="border-t border-border">
      <SectionHeader
        index="05"
        eyebrow="Technical expertise"
        title="Organized by the layer it runs in."
        lede="Only what I have used in production or shipped with. No percentage bars."
      />
      {/* Column flow packs groups of different heights without leaving empty cells. */}
      <div className="gap-5 md:columns-2 lg:columns-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.04} className="mb-5 break-inside-avoid">
            <div className="rounded-xl border border-border bg-surface p-5 sm:p-6">
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
