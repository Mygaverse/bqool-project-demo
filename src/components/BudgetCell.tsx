import { BudgetInput } from './BudgetInput';
import { Badge } from './Badge';

export interface BudgetCellProps {
  value: number | null;
  onChange?: (value: number) => void;
  invalid?: boolean;
  isAuto?: boolean;
}

/** BudgetInput plus an optional "Auto" badge — the Daily Budget column. */
export function BudgetCell({ value, onChange, invalid = false, isAuto = false }: BudgetCellProps) {
  return (
    <div className="flex flex-col gap-1.5 font-sans">
      <BudgetInput value={value} onChange={onChange} invalid={invalid} />
      {isAuto && <Badge tone="neutral">Auto</Badge>}
    </div>
  );
}
