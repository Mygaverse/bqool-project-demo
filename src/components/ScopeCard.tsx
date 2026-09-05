export interface ScopeCardProps {
  label: string;
  value: string;
  warning?: boolean;
}

/** One metadata tile in BQool Insight's Scope / Period / Coverage / Freshness / Source row. */
export function ScopeCard({ label, value, warning = false }: ScopeCardProps) {
  return (
    <article className="rounded-token-lg border border-scope-card-border bg-scope-card-bg p-token-3 shadow-resting">
      <p className="text-[8px] font-bold uppercase tracking-wide text-scope-card-label-fg">{label}</p>
      <p className={`mt-1 text-[10px] font-bold ${warning ? 'text-scope-card-value-fg-warning' : 'text-scope-card-value-fg'}`}>{value}</p>
    </article>
  );
}
