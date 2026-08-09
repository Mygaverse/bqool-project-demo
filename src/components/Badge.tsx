import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'success' | 'warning' | 'danger';
  /** outline = white fill, colored border (default, matches most of the real product). */
  emphasis?: 'outline' | 'solid';
}

export function Badge({ tone = 'neutral', emphasis = 'outline', className, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-token-4 py-token-1 rounded-token-full text-xs font-semibold uppercase tracking-wide',
        emphasis === 'outline' && [
          'border bg-surface-default',
          tone === 'neutral' && 'border-surface-border text-text-secondary',
          tone === 'success' && 'border-feedback-success text-feedback-success',
          tone === 'warning' && 'border-feedback-warning text-feedback-warning',
          tone === 'danger' && 'border-feedback-danger text-feedback-danger',
        ],
        emphasis === 'solid' && [
          tone === 'neutral' && 'bg-text-secondary text-text-inverse',
          tone === 'success' && 'bg-feedback-success-tint text-feedback-success',
          tone === 'warning' && 'bg-feedback-warning-tint text-feedback-warning',
          tone === 'danger' && 'bg-feedback-danger-tint text-feedback-danger',
        ],
        className,
      )}
      {...props}
    />
  );
}
