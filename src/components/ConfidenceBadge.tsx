export type ConfidenceLevel = 'high' | 'moderate' | 'low';

export interface ConfidenceBadgeProps {
  level: ConfidenceLevel;
}

const STYLE: Record<ConfidenceLevel, string> = {
  high: 'bg-ai-confidence-high-bg text-ai-confidence-high-fg',
  moderate: 'bg-ai-confidence-moderate-bg text-ai-confidence-moderate-fg',
  low: 'bg-ai-confidence-low-bg text-ai-confidence-low-fg',
};

/** "{level} confidence" pill on a BQool Insight Executive Summary card. */
export function ConfidenceBadge({ level }: ConfidenceBadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-token-full px-token-3 py-1 text-[9px] font-bold ${STYLE[level]}`}>
      {level} confidence
    </span>
  );
}
