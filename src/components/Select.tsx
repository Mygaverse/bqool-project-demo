import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export interface SelectProps {
  label?: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
  /** grouped = no own border/radius, for placement inside FilterBar. */
  variant?: 'standalone' | 'grouped';
  className?: string;
}

export function Select({ label, value, options, onChange, variant = 'standalone', className }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div ref={ref} className={clsx('relative font-sans', className)}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={clsx(
          'flex items-center justify-between gap-token-2 px-token-3 py-token-2 bg-surface-default text-left w-full hover:bg-surface-selected transition-colors',
          variant === 'standalone' && 'border border-surface-border rounded-token-md',
        )}
      >
        <span className="flex flex-col min-w-0">
          {label && <span className="text-[10px] text-text-secondary leading-tight truncate">{label}</span>}
          <span className="text-sm text-text-primary font-medium leading-tight truncate">{value}</span>
        </span>
        <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0 text-text-secondary" fill="none">
          <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 min-w-[160px] w-max max-w-xs bg-surface-default border border-surface-border rounded-token-md shadow-raised z-10 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
              className={clsx(
                'px-token-3 py-token-2 text-sm cursor-pointer truncate',
                option === value ? 'bg-surface-selected text-action-primary' : 'text-text-primary hover:bg-surface-selected',
              )}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
