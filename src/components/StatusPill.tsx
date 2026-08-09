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
        status === 'enabled' && 'bg-action-primary text-text-inverse hover:bg-action-primary-hover',
        status === 'paused' && 'bg-surface-muted text-text-inverse',
        status === 'pending' && 'bg-surface-default text-action-primary border border-action-primary',
      )}
    >
      <span
        className={clsx(
          'h-1.5 w-1.5 rounded-full',
          status === 'enabled' && 'bg-text-inverse',
          status === 'paused' && 'bg-text-inverse',
          status === 'pending' && 'bg-action-primary',
        )}
      />
      {LABEL[status]}
    </button>
  );
}
