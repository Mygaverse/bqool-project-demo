import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'success' | 'warning' | 'danger';
}

/**
 * Outline style (white fill, colored border + text) — matches the real
 * product's Badge component, not a filled pill.
 */
export function Badge({ tone = 'neutral', className, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center border px-token-4 py-token-1 rounded-token-full text-xs font-semibold uppercase tracking-wide bg-surface-default',
        tone === 'neutral' && 'border-surface-border text-text-secondary',
        tone === 'success' && 'border-feedback-success text-feedback-success',
        tone === 'warning' && 'border-feedback-warning text-feedback-warning',
        tone === 'danger' && 'border-feedback-danger text-feedback-danger',
        className,
      )}
      {...props}
    />
  );
}
