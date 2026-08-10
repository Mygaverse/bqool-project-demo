import type { ReactNode } from 'react';

export interface FilterBarProps {
  children: ReactNode;
}

/** A "connected look" row of grouped Select instances — pass Select with variant="grouped". */
export function FilterBar({ children }: FilterBarProps) {
  return (
    <div className="inline-flex divide-x divide-surface-border rounded-token-md border border-surface-border overflow-hidden bg-surface-default shadow-resting font-sans">
      {children}
    </div>
  );
}
