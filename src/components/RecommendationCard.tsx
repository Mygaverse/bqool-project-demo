export interface RecommendationCardProps {
  index: number;
  kindLabel: string;
  priorityLabel: string;
  readinessLabel: string;
  readinessTone: 'positive' | 'warning' | 'neutral';
  action: string;
  rationale: string;
  description: string;
  actionLabel: string;
  onAction?: () => void;
}

const READINESS_STYLE: Record<RecommendationCardProps['readinessTone'], string> = {
  positive: 'bg-ai-badge-opportunity-bg text-ai-badge-opportunity-fg',
  warning: 'bg-ai-badge-warning-bg text-ai-badge-warning-fg',
  neutral: 'bg-ai-badge-neutral-bg text-ai-badge-neutral-fg',
};

/** One grounded next-step in BQool Insight's "Recommended Next Steps" section. */
export function RecommendationCard({
  index,
  kindLabel,
  priorityLabel,
  readinessLabel,
  readinessTone,
  action,
  rationale,
  description,
  actionLabel,
  onAction,
}: RecommendationCardProps) {
  return (
    <article className="rounded-token-lg border border-recommendation-card-item-border bg-recommendation-card-item-bg p-token-3 shadow-resting">
      <div className="flex items-start gap-token-3">
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-token-full bg-ai-badge-accent-bg text-[9px] font-extrabold text-ai-badge-accent-fg">
          {index}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="rounded-token-full bg-ai-badge-accent-bg px-token-2 py-0.5 text-[8px] font-bold uppercase text-ai-badge-accent-fg">
              {kindLabel}
            </span>
            <span className="rounded-token-full bg-ai-badge-neutral-bg px-token-2 py-0.5 text-[8px] font-bold uppercase text-ai-badge-neutral-fg">
              {priorityLabel} priority
            </span>
            <span className={`rounded-token-full px-token-2 py-0.5 text-[8px] font-bold uppercase ${READINESS_STYLE[readinessTone]}`}>
              {readinessLabel}
            </span>
          </div>
          <h4 className="mt-token-2 text-xs font-extrabold text-recommendation-card-title-fg">{action}</h4>
          <p className="mt-1 text-[10px] leading-relaxed text-recommendation-card-rationale-fg">{rationale}</p>
          <div className="mt-token-2 flex items-center justify-between gap-token-3 border-t border-recommendation-card-item-border pt-token-2">
            <p className="text-[9px] leading-relaxed text-recommendation-card-description-fg">{description}</p>
            <button
              type="button"
              onClick={onAction}
              className="shrink-0 rounded-token-md bg-recommendation-card-button-bg px-token-3 py-1.5 text-[9px] font-bold text-recommendation-card-button-fg hover:bg-recommendation-card-button-bg-hover"
            >
              {actionLabel}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
