import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'icon';
}

export function Button({ variant = 'primary', className, style, ...props }: ButtonProps) {
  return (
    <button
      style={variant !== 'icon' ? { font: 'var(--typography-body-sm)', ...style } : style}
      className={clsx(
        'inline-flex items-center justify-center gap-token-2 transition-colors',
        variant !== 'icon' && 'px-token-4 py-token-2 rounded-token-md',
        variant === 'primary' && 'bg-action-primary text-text-inverse hover:bg-action-primary-hover',
        variant === 'secondary' &&
          'bg-surface-default text-text-primary border border-surface-border hover:bg-action-primary hover:text-text-inverse hover:border-action-primary',
        variant === 'icon' && 'p-1.5 rounded-token-md text-action-primary hover:bg-surface-selected',
        'disabled:cursor-not-allowed disabled:bg-surface-disabled disabled:text-text-disabled disabled:border-surface-disabled disabled:hover:bg-surface-disabled disabled:hover:text-text-disabled disabled:hover:border-surface-disabled',
        className,
      )}
      {...props}
    />
  );
}
