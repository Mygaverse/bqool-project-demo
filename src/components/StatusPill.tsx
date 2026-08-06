import clsx from 'clsx';

export interface StatusPillProps {
  status: 'enabled' | 'paused' | 'pending';
  onToggle?: () => void;
}

const LABEL: Record<StatusPillProps['status'], string> = {
  enabled: 'Enabled',
  paused: 'Paused',
  pending: 'Pending review',
};

/**
 * Status as a live, actionable control rather than a static label —
 * the pattern from the BQool case study's campaign table redesign.
 */
export function StatusPill({ status, onToggle }: StatusPillProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={clsx(
        'inline-flex items-center gap-token-2 px-token-4 py-token-1 rounded-token-full text-xs font-semibold transition-colors',
        status === 'enabled' && 'bg-success-500 text-text-inverse hover:opacity-90',
        status === 'paused' && 'bg-surface-muted text-text-secondary border border-surface-border',
        status === 'pending' && 'bg-warning-500 text-text-primary',
      )}
    >
      <span
        className={clsx(
          'h-1.5 w-1.5 rounded-full',
          status === 'enabled' && 'bg-text-inverse',
          status === 'paused' && 'bg-text-secondary',
          status === 'pending' && 'bg-text-primary',
        )}
      />
      {LABEL[status]}
    </button>
  );
}
