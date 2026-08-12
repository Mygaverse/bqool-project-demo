import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

export interface MultiSelectProps {
  label?: string;
  values: string[];
  options: string[];
  onChange: (values: string[]) => void;
  allLabel?: string;
  /** grouped = no own border/radius, for placement inside FilterBar. */
  variant?: 'standalone' | 'grouped';
  className?: string;
}

const Checkbox = ({ checked }: { checked: boolean }) => (
  <span
    className={clsx(
      'flex items-center justify-center h-4 w-4 rounded shrink-0 border',
      checked ? 'bg-action-primary border-action-primary' : 'bg-surface-default border-surface-border',
    )}
  >
    {checked && (
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )}
  </span>
);

/** Same shape as Select, but the menu is a checkbox list and stays open — for filters that aggregate across a selection (e.g. Dashboard's Store/Ad Type). */
export function MultiSelect({ label, values, options, onChange, allLabel = 'All', variant = 'standalone', className }: MultiSelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const allSelected = values.length === options.length;
  const toggleAll = () => onChange(allSelected ? [] : [...options]);
  const toggleOption = (option: string) =>
    onChange(values.includes(option) ? values.filter((v) => v !== option) : [...values, option]);

  const displayValue = allSelected ? allLabel : values.length === 1 ? values[0] : values.length === 0 ? 'None' : `${values.length} selected`;

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
          <span className="text-sm text-text-primary font-medium leading-tight truncate">{displayValue}</span>
        </span>
        <svg width="10" height="10" viewBox="0 0 10 10" className="shrink-0 text-text-secondary" fill="none">
          <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-1 min-w-[200px] w-max max-w-xs bg-surface-default border border-surface-border rounded-token-md shadow-raised z-10 max-h-60 overflow-y-auto">
          <div
            onClick={toggleAll}
            className="flex items-center gap-token-2 px-token-3 py-token-2 text-sm text-text-primary cursor-pointer hover:bg-surface-selected border-b border-surface-border"
          >
            <Checkbox checked={allSelected} />
            {allLabel}
          </div>
          {options.map((option) => (
            <div
              key={option}
              onClick={() => toggleOption(option)}
              className="flex items-center gap-token-2 px-token-3 py-token-2 text-sm text-text-primary cursor-pointer hover:bg-surface-selected truncate"
            >
              <Checkbox checked={values.includes(option)} />
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
