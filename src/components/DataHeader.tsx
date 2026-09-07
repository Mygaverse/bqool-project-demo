import clsx from 'clsx';
import type { ReactNode } from 'react';

export interface DataHeaderProps {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  /** Trailing badge-shaped content, e.g. an AIModeBadge or a status pill. */
  badge?: ReactNode;
  /** eyebrow = small uppercase label (e.g. "Execution History"); sm = compact panel title
   *  (e.g. "BQool Insight"); md = standalone section heading (e.g. "Start with a skill"). */
  size?: 'eyebrow' | 'sm' | 'md';
  /** Dark-background usage, e.g. the BQool Insight panel header. */
  inverted?: boolean;
  className?: string;
}

const TITLE_SIZE: Record<NonNullable<DataHeaderProps['size']>, string> = {
  eyebrow: 'text-[10px] font-extrabold uppercase tracking-wide',
  sm: 'text-sm font-extrabold tracking-wide',
  md: '',
};

/** Icon + title(+subtitle) + trailing badge — the shared header row for cards, panels, and page headers. */
export function DataHeader({ icon, title, subtitle, badge, size = 'md', inverted = false, className }: DataHeaderProps) {
  return (
    <div className="flex items-center gap-token-2">
      {icon && (
        <div className={clsx('flex shrink-0 items-center justify-center', inverted ? 'text-ai-indigo-200' : 'text-ai-indigo-600')}>
          {icon}
        </div>
      )}
      <div className="min-w-0 flex-1">
        <h3
          style={size === 'md' ? { font: 'var(--typography-heading-md)' } : undefined}
          className={clsx('truncate', TITLE_SIZE[size], inverted ? 'text-text-inverse' : 'text-text-primary', className)}
        >
          {title}
        </h3>
        {subtitle && (
          <p
            className={clsx('mt-0.5', inverted ? 'text-ai-indigo-200' : 'text-text-secondary')}
            style={{ font: 'var(--typography-caption)' }}
          >
            {subtitle}
          </p>
        )}
      </div>
      {badge && <div className="shrink-0">{badge}</div>}
    </div>
  );
}
