import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ invalid, className, ...props }: InputProps) {
  return (
    <input
      className={clsx(
        'w-full px-token-4 py-token-2 rounded-token-md border bg-surface-default text-text-primary text-sm',
        'focus:outline-none focus:ring-2 focus:ring-action-primary',
        invalid ? 'border-feedback-danger' : 'border-surface-border',
        className,
      )}
      {...props}
    />
  );
}
