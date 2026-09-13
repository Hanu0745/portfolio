import { GitFork, Mic, Scale, Workflow } from "lucide-react";
import { featuredProject } from "@/data/projects";
import { Pipeline } from "@/components/diagrams/pipeline";
import { Reveal } from "@/components/motion/reveal";
import { Card } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";

const practices = [
  {
    icon: Workflow,
    title: "Evaluation as a pipeline, not a request",
    detail:
      "Model calls run in BullMQ workers backed by Redis. The API acknowledges immediately, results stream back over Socket.IO, and a failed call is retried or routed to a fallback instead of being lost.",
  },
  {
    icon: GitFork,
    title: "Model routing with fallback",
    detail:
      "Vaktora evaluates with a locally hosted Kimi model first and falls back to the OpenAI API when the local path fails or times out. The evaluation contract is identical on both paths.",
  },
  {
    icon: Mic,
    title: "Speech in the loop",
    detail:
      "Spoken answers are transcribed with Whisper before evaluation, so scoring works from a transcript and the report can show the candidate exactly what they said.",
  },
  {
    icon: Scale,
    title: "Comparing and checking model output",
    detail:
      "Outputs from both evaluation paths were compared on the same answers to keep scores consistent. On the LSRW platform, subjective tasks route to a hybrid human review rather than trusting the model alone.",
  },
];

const contrast = {
  basic: ["Call a hosted model from the request handler", "Return raw text to the client", "One provider, no fallback", "No way to check whether scores are consistent"],
  engineered: ["Queue evaluation jobs off the request path", "Return structured scores, grades and feedback", "Local model first, hosted model as fallback", "Compare model outputs and keep humans in the loop where needed"],
};

export function AIEngineering() {
  const workflow = featuredProject?.caseStudy?.aiWorkflow ?? [];
  return (
    <Section id="ai-engineering" className="border-t border-border bg-bg-elevated">
      <SectionHeader
        index="04"
        eyebrow="AI engineering"
        title="Beyond calling an API."
        lede="Integrating a model is the easy part. The work is making evaluation reliable, fast and consistent inside a product people use every day."
      />

      <Reveal>
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          <div className="bg-surface p-5 sm:p-6">
            <p className="font-mono text-[11px] tracking-wider text-muted uppercase">Basic API usage</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {contrast.basic.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-accent-soft p-5 sm:p-6">
            <p className="font-mono text-[11px] tracking-wider text-accent-text uppercase">AI application engineering</p>
            <ul className="mt-3 space-y-2 text-sm text-fg">
              {contrast.engineered.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>

      <div className="mt-14">
        <Reveal>
          <p className="mb-4 font-mono text-xs tracking-wider text-muted uppercase">Vaktora evaluation pipeline</p>
        </Reveal>
        <Pipeline steps={workflow} emphasize={[3]} />
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {practices.map((practice, i) => (
          <Reveal key={practice.title} delay={i * 0.05} className="h-full">
            <Card className="h-full p-5 sm:p-6">
              <practice.icon className="h-5 w-5 text-accent-text" aria-hidden />
              <h3 className="mt-4 text-base font-semibold text-fg">{practice.title}</h3>
              <p className="text-pretty mt-2 text-sm leading-relaxed text-muted">{practice.detail}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
