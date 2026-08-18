import type { ReactNode } from 'react';

export interface SummaryCellProps {
  children: ReactNode;
}

/** Bold aggregate value/label — the table's Total row. */
export function SummaryCell({ children }: SummaryCellProps) {
  return <span className="font-semibold text-text-primary">{children}</span>;
}
