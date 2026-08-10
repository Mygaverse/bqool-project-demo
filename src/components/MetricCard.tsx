import { TrendPill } from './TrendPill';

export interface MetricCardProps {
  title: string;
  value: string;
  previousValue: string;
  change: number;
}

/** Dropdown-style header + big value + "was X" + TrendPill — a Performance Overview stat card. */
export function MetricCard({ title, value, previousValue, change }: MetricCardProps) {
  return (
    <div className="flex flex-col bg-surface-default border border-surface-border rounded-token-lg shadow-resting overflow-hidden font-sans">
      <div className="flex items-center justify-between px-token-4 py-token-2 border-b border-surface-border bg-surface-subtle">
        <span className="text-sm font-medium text-text-primary">{title}</span>
        <svg width="10" height="10" viewBox="0 0 10 10" className="text-text-secondary" fill="none">
          <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="p-token-4">
        <div className="text-2xl font-bold text-text-primary mb-token-2">{value}</div>
        <div className="flex items-center gap-token-2">
          <span className="text-xs text-text-secondary">was {previousValue}</span>
          <TrendPill value={change} />
        </div>
      </div>
    </div>
  );
}
