import clsx from 'clsx';

export interface TrendPillProps {
  /** e.g. -1.0 or 9.2 — sign determines tone, not the caller. */
  value: number;
}

/**
 * Period-over-period delta on a stat card (e.g. "vs prev. period").
 * Soft/pastel fill, distinct from Badge's outline style — a different
 * purpose (directional change, not a status/category label).
 */
export function TrendPill({ value }: TrendPillProps) {
  const positive = value >= 0;
  return (
    <span
      style={{ font: 'var(--typography-label)' }}
      className={clsx(
        'inline-flex items-center px-token-4 py-token-1 rounded-token-full',
        positive ? 'bg-trend-pill-positive-bg text-trend-pill-positive-fg' : 'bg-trend-pill-negative-bg text-trend-pill-negative-fg',
      )}
    >
      {positive ? '+' : ''}
      {value.toFixed(1)}%
    </span>
  );
}
