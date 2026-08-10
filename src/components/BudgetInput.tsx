import clsx from 'clsx';

export interface BudgetInputProps {
  value: number | null;
  onChange?: (value: number) => void;
  invalid?: boolean;
  errorMessage?: string;
}

/** Daily-budget stepper input from the Ad Manager table's Daily Budget column. */
export function BudgetInput({ value, onChange, invalid = false, errorMessage = 'Invalid bid' }: BudgetInputProps) {
  const step = (delta: number) => onChange?.(Math.max(0, (value ?? 0) + delta));

  return (
    <div className="flex flex-col gap-1 font-sans">
      <div
        className={clsx(
          'flex items-center rounded-token-md border bg-surface-default overflow-hidden w-32',
          invalid ? 'border-feedback-danger' : 'border-surface-border',
        )}
      >
        <span className="pl-token-3 text-text-secondary text-sm">$</span>
        <input
          type="number"
          value={value ?? ''}
          onChange={(e) => onChange?.(parseFloat(e.target.value))}
          className="w-full min-w-0 px-token-2 py-token-2 text-sm text-text-primary bg-transparent outline-none"
        />
        <div className="flex flex-col border-l border-surface-border">
          <button
            type="button"
            onClick={() => step(1)}
            className="px-1.5 h-[15px] leading-none text-[10px] text-text-secondary hover:text-action-primary"
          >
            ▲
          </button>
          <button
            type="button"
            onClick={() => step(-1)}
            className="px-1.5 h-[15px] leading-none text-[10px] text-text-secondary hover:text-action-primary border-t border-surface-border"
          >
            ▼
          </button>
        </div>
      </div>
      {invalid && <span className="text-xs text-feedback-danger">⚠ {errorMessage}</span>}
    </div>
  );
}
