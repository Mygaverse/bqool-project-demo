export type AIMode = 'live' | 'sandbox' | 'cached' | 'degraded';

export interface AIModeBadgeProps {
  mode: AIMode;
  /** Dark-background usage, e.g. the BQool Insight panel header. */
  inverted?: boolean;
}

const LABEL: Record<AIMode, string> = { live: 'Live AI', sandbox: 'Sandbox', cached: 'Cached', degraded: 'Degraded' };

const NORMAL: Record<AIMode, string> = {
  live: 'bg-ai-mode-live-normal-bg text-ai-mode-live-normal-fg border-ai-mode-live-normal-border',
  sandbox: 'bg-ai-mode-sandbox-normal-bg text-ai-mode-sandbox-normal-fg border-ai-mode-sandbox-normal-border',
  cached: 'bg-ai-mode-cached-normal-bg text-ai-mode-cached-normal-fg border-ai-mode-cached-normal-border',
  degraded: 'bg-ai-mode-degraded-normal-bg text-ai-mode-degraded-normal-fg border-ai-mode-degraded-normal-border',
};

const INVERTED: Record<AIMode, string> = {
  live: 'bg-ai-mode-live-inverted-bg text-ai-mode-live-inverted-fg border-ai-mode-live-inverted-border',
  sandbox: 'bg-ai-mode-sandbox-inverted-bg text-ai-mode-sandbox-inverted-fg border-ai-mode-sandbox-inverted-border',
  cached: 'bg-ai-mode-cached-inverted-bg text-ai-mode-cached-inverted-fg border-ai-mode-cached-inverted-border',
  degraded: 'bg-ai-mode-degraded-inverted-bg text-ai-mode-degraded-inverted-fg border-ai-mode-degraded-inverted-border',
};

/** BQool Pilot's AI-provenance pill — shown in both the Pilot composer and the Insight header. */
export function AIModeBadge({ mode, inverted = false }: AIModeBadgeProps) {
  return (
    <span
      style={{ font: 'var(--typography-label)' }}
      className={`inline-flex items-center rounded-token-full border px-token-2 py-0.5 text-[10px] uppercase tracking-wide ${inverted ? INVERTED[mode] : NORMAL[mode]}`}
    >
      {LABEL[mode]}
    </span>
  );
}
