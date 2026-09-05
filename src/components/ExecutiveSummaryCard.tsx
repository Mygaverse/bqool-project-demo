import { ConfidenceBadge, type ConfidenceLevel } from './ConfidenceBadge';

export type SummaryTone = 'critical' | 'warning' | 'opportunity' | 'neutral' | 'limited';

export interface ExecutiveSummaryCardProps {
  tone: SummaryTone;
  headline: string;
  takeaway: string;
  confidence: ConfidenceLevel;
}

const TONE_STYLE: Record<SummaryTone, string> = {
  critical: 'bg-ai-tone-critical-bg border-ai-tone-critical-border text-ai-tone-critical-fg',
  warning: 'bg-ai-tone-warning-bg border-ai-tone-warning-border text-ai-tone-warning-fg',
  opportunity: 'bg-ai-tone-opportunity-bg border-ai-tone-opportunity-border text-ai-tone-opportunity-fg',
  neutral: 'bg-ai-tone-neutral-bg border-ai-tone-neutral-border text-ai-tone-neutral-fg',
  limited: 'bg-ai-tone-limited-bg border-ai-tone-limited-border text-ai-tone-limited-fg',
};

/**
 * BQool Insight's top card. Tone is grounded-data-driven (critical / warning /
 * opportunity / neutral / limited) — the same card renders as rose, amber,
 * emerald, indigo, or slate depending on the underlying finding, not a fixed
 * brand color.
 */
export function ExecutiveSummaryCard({ tone, headline, takeaway, confidence }: ExecutiveSummaryCardProps) {
  return (
    <section className={`rounded-token-lg border p-token-4 ${TONE_STYLE[tone]}`}>
      <div className="flex flex-wrap items-start justify-between gap-token-3">
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-extrabold uppercase tracking-wide opacity-60">Executive Summary</p>
          <h3 className="mt-1 text-sm font-extrabold">{headline}</h3>
          <p className="mt-2 text-xs leading-relaxed opacity-90">{takeaway}</p>
        </div>
        <ConfidenceBadge level={confidence} />
      </div>
    </section>
  );
}
