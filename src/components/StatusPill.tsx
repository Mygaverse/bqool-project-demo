import clsx from 'clsx';

export interface StatusPillProps {
  status: 'enabled' | 'paused' | 'pending';
  onToggle?: () => void;
}

const LABEL: Record<StatusPillProps['status'], string> = {
  enabled: 'Enabled',
  paused: 'Paused',
  pending: 'Pending...',
};

/**
 * Enabled/Paused pill for a feature toggle (e.g. AI-Bidding, AI-Harvesting) —
 * the dot sits on the trailing edge when on and the leading edge when off,
 * echoing the knob position of a real switch. Pending is a waiting state
 * with no toggle metaphor, so it carries no dot.
 */
export function StatusPill({ status, onToggle }: StatusPillProps) {
  const dot = <span className="h-1.5 w-1.5 rounded-full bg-text-inverse" />;
  return (
    <button
      type="button"
      onClick={onToggle}
      style={{ font: 'var(--typography-label)' }}
      className={clsx(
        'inline-flex items-center gap-token-2 px-token-4 py-token-1 rounded-token-full transition-colors',
        status === 'enabled' && 'bg-action-primary text-text-inverse hover:bg-action-primary-hover',
        status === 'paused' && 'bg-surface-muted text-text-inverse',
        status === 'pending' && 'bg-surface-default text-action-primary border border-action-primary',
      )}
    >
      {status === 'paused' && dot}
      {LABEL[status]}
      {status === 'enabled' && dot}
    </button>
  );
}
