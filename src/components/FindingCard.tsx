export type FindingSeverity = 'critical' | 'warning' | 'opportunity' | 'info';

export interface FindingCardMetric {
  label: string;
  value: string;
}

export interface FindingCardProps {
  rank: number;
  title: string;
  detail: string;
  /** Category/context pills above the title, e.g. "Review" / "High priority" / "Evidence review". */
  tags?: string[];
  /** Omit to hide the severity pill entirely. */
  severity?: FindingSeverity;
  /** Omit to hide the 4-column metric grid (e.g. ACOS/ROAS/Spend/Sales). */
  metrics?: FindingCardMetric[];
  agent?: string;
  /** Evidence count + "Review evidence" action — omit either to hide that row. */
  evidenceCount?: number;
  onReviewEvidence?: () => void;
}

const SEVERITY_STYLE: Record<FindingSeverity, string> = {
  critical: 'bg-ai-badge-critical-bg text-ai-badge-critical-fg',
  warning: 'bg-ai-badge-warning-bg text-ai-badge-warning-fg',
  opportunity: 'bg-ai-badge-opportunity-bg text-ai-badge-opportunity-fg',
  info: 'bg-ai-badge-neutral-bg text-ai-badge-neutral-fg',
};

/** Ranked, evidence-grounded finding row in BQool Insight's "Ranked Findings" section. */
export function FindingCard({ rank, title, detail, tags, severity, metrics, agent, evidenceCount, onReviewEvidence }: FindingCardProps) {
  return (
    <article className="rounded-token-lg border border-finding-card-border bg-finding-card-bg p-token-3 shadow-resting">
      <div className="flex items-start gap-token-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-token-full bg-finding-card-rank-bg text-[9px] font-extrabold text-finding-card-rank-fg">
          {rank}
        </span>
        <div className="min-w-0 flex-1">
          {tags && tags.length > 0 && (
            <div className="mb-1.5 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span key={tag} className="rounded-token-full bg-ai-badge-neutral-bg px-token-2 py-0.5 text-[8px] font-bold uppercase text-ai-badge-neutral-fg">
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-1.5">
            <h4 className="text-xs font-extrabold text-finding-card-title-fg">{title}</h4>
            {severity && (
              <span className={`rounded-token-full px-token-2 py-0.5 text-[8px] font-bold uppercase ${SEVERITY_STYLE[severity]}`}>{severity}</span>
            )}
          </div>
          {metrics && metrics.length > 0 && (
            <dl className="mt-token-2 grid grid-cols-2 gap-1.5 sm:grid-cols-4">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-token-md bg-scope-card-bg px-token-2 py-1.5">
                  <dt className="text-[7px] font-bold uppercase text-scope-card-label-fg">{metric.label}</dt>
                  <dd className="mt-0.5 text-[10px] font-extrabold text-scope-card-value-fg">{metric.value}</dd>
                </div>
              ))}
            </dl>
          )}
          <p className="mt-token-2 text-[10px] leading-relaxed text-finding-card-detail-fg">{detail}</p>
          {agent && <p className="mt-token-2 text-[9px] font-semibold text-finding-card-agent-fg">{agent}</p>}
        </div>
      </div>
      {evidenceCount !== undefined && onReviewEvidence && (
        <div className="mt-token-3 flex items-center justify-between border-t border-finding-card-border pt-token-2">
          <span className="text-[10px] font-bold text-ai-blue-600">Evidence ({evidenceCount})</span>
          <button
            type="button"
            onClick={onReviewEvidence}
            className="rounded-token-md border border-ai-indigo-200 bg-surface-default px-token-3 py-1 text-[9px] font-bold text-ai-indigo-700 hover:bg-ai-indigo-50"
          >
            Review evidence
          </button>
        </div>
      )}
    </article>
  );
}
