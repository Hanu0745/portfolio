import type { Challenge } from "@/types/content";

export function Challenges({ items }: { items: Challenge[] }) {
  return (
    <ol className="space-y-4">
      {items.map((item, i) => (
        <li key={item.title} className="rounded-xl border border-border bg-surface p-5 sm:p-6">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-xs text-accent-text">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="text-base font-semibold text-fg">{item.title}</h3>
          </div>
          <dl className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[11px] tracking-wider text-muted uppercase">Challenge</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-fg-secondary">{item.problem}</dd>
            </div>
            <div className="border-t border-border pt-4 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-4">
              <dt className="font-mono text-[11px] tracking-wider text-accent-text uppercase">Solution</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-fg-secondary">{item.solution}</dd>
            </div>
          </dl>
        </li>
      ))}
    </ol>
  );
}
