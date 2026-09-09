const CheckIcon = () => (
  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6" fill="currentColor" />
    <path d="M4.3 7.2 6.1 9l3.6-4" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export interface StatusCardProps {
  label: string;
  value: string;
  detail: string;
}

/** One execution-status readout in BQool Insight's Provider/Execution/Confidence row. */
export function StatusCard({ label, value, detail }: StatusCardProps) {
  return (
    <article className="rounded-token-lg border border-ai-slate-200 bg-surface-default p-token-3">
      <div className="flex items-center gap-1.5">
        <span className="text-ai-emerald-500">
          <CheckIcon />
        </span>
        <p className="text-[8px] font-bold uppercase tracking-wide text-ai-slate-400">{label}</p>
      </div>
      <p className="mt-1.5 text-xs font-bold capitalize text-ai-slate-800">{value}</p>
      <p className="mt-1 text-[9px] leading-relaxed text-ai-slate-500">{detail}</p>
    </article>
  );
}
