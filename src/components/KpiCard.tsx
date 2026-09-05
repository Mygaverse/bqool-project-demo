export interface KpiCardProps {
  label: string;
  value: string;
}

/** BQool Insight's KPI Snapshot tile — a plainer, slate-neutral sibling of MetricCard (no trend). */
export function KpiCard({ label, value }: KpiCardProps) {
  return (
    <article className="rounded-token-lg border border-kpi-card-border bg-kpi-card-bg p-token-3 shadow-resting">
      <p className="text-[8px] font-bold uppercase tracking-wide text-kpi-card-label-fg">{label}</p>
      <p className="mt-1 text-lg font-extrabold text-kpi-card-value-fg">{value}</p>
    </article>
  );
}
