import type { Metric } from "@/types/content";

export function Metrics({ items }: { items: Metric[] }) {
  return (
    <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
      {items.map((metric) => (
        <div key={metric.label} className="bg-surface px-4 py-4 sm:px-5">
          <dd className="font-mono text-2xl font-semibold tracking-tight text-fg">{metric.value}</dd>
          <dt className="mt-1 text-[13px] leading-snug text-muted">{metric.label}</dt>
        </div>
      ))}
    </dl>
  );
}
