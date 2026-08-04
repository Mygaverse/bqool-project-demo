import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center px-token-4 py-token-2 rounded-token-md text-sm font-medium transition-colors',
        variant === 'primary' && 'bg-brand-500 text-text-inverse hover:bg-brand-600',
        variant === 'secondary' &&
          'bg-surface-default text-text-primary border border-surface-border hover:bg-surface-muted',
        className,
      )}
      {...props}
    />
  );
}
