import clsx from 'clsx';
import type { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Selectable-option state, e.g. the Ad Format picker in Campaign Builder. */
  selected?: boolean;
}

export function Card({ selected = false, className, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'border rounded-token-lg p-token-6 shadow-resting',
        selected
          ? 'bg-surface-selected border-action-primary'
          : 'bg-surface-default border-surface-border',
        className,
      )}
      {...props}
    />
  );
}
