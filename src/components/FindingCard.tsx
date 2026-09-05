export type FindingSeverity = 'critical' | 'warning' | 'opportunity' | 'info';

export interface FindingCardProps {
  rank: number;
  title: string;
  severity: FindingSeverity;
  detail: string;
  agent: string;
}

const SEVERITY_STYLE: Record<FindingSeverity, string> = {
  critical: 'bg-ai-badge-critical-bg text-ai-badge-critical-fg',
  warning: 'bg-ai-badge-warning-bg text-ai-badge-warning-fg',
  opportunity: 'bg-ai-badge-opportunity-bg text-ai-badge-opportunity-fg',
  info: 'bg-ai-badge-neutral-bg text-ai-badge-neutral-fg',
};

/** Ranked, evidence-grounded finding row in BQool Insight's "Ranked Findings" section. */
export function FindingCard({ rank, title, severity, detail, agent }: FindingCardProps) {
  return (
    <article className="rounded-token-lg border border-finding-card-border bg-finding-card-bg p-token-3 shadow-resting">
      <div className="flex items-start gap-token-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-token-full bg-finding-card-rank-bg text-[9px] font-extrabold text-finding-card-rank-fg">
          {rank}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <h4 className="text-xs font-extrabold text-finding-card-title-fg">{title}</h4>
            <span className={`rounded-token-full px-token-2 py-0.5 text-[8px] font-bold uppercase ${SEVERITY_STYLE[severity]}`}>{severity}</span>
          </div>
          <p className="mt-token-2 text-[10px] leading-relaxed text-finding-card-detail-fg">{detail}</p>
          <p className="mt-token-2 text-[9px] font-semibold text-finding-card-agent-fg">{agent}</p>
        </div>
      </div>
    </article>
  );
}
