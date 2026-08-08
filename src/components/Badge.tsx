import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: 'success' | 'warning' | 'danger';
}

export function Badge({ tone = 'success', className, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-token-4 py-token-1 rounded-token-full text-xs font-semibold uppercase tracking-wide',
        tone === 'success' && 'bg-feedback-success text-text-inverse',
        tone === 'warning' && 'bg-feedback-warning text-text-primary',
        tone === 'danger' && 'bg-feedback-danger text-text-inverse',
        className,
      )}
      {...props}
    />
  );
}
