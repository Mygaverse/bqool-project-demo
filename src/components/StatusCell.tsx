import { Toggle } from './Toggle';
import { Badge } from './Badge';

export interface StatusCellProps {
  enabled: boolean;
  onToggle?: (enabled: boolean) => void;
  label?: string;
}

/** Plain Toggle plus an optional label badge — the row-level Status column. */
export function StatusCell({ enabled, onToggle, label }: StatusCellProps) {
  return (
    <div className="flex flex-col items-center gap-token-2 font-sans">
      <Toggle checked={enabled} onChange={(value) => onToggle?.(value)} />
      {label && <Badge tone="neutral">{label}</Badge>}
    </div>
  );
}
