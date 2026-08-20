import clsx from 'clsx';

export interface HeaderCellProps {
  label?: string;
  icon?: 'sort' | 'info' | 'edu';
  checkbox?: boolean;
  align?: 'left' | 'center';
  /** header = column-label style (uppercase, secondary); summary = the Total row's bold value style. */
  variant?: 'header' | 'summary';
}

const SortIcon = () => <span className="text-[10px] align-middle">↕</span>;

const InfoIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" />
    <path d="M6 5.5v3M6 3.5v.01" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
  </svg>
);

const EduIcon = () => (
  <svg width="14" height="12" viewBox="0 0 14 12" fill="none" className="text-action-primary">
    <path d="M7 1 1 4l6 3 6-3-6-3Z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    <path d="M4 5.5v2.5c0 .8 1.3 1.5 3 1.5s3-.7 3-1.5V5.5" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const ICONS = { sort: SortIcon, info: InfoIcon, edu: EduIcon };

/** Shared cell shell (text + optional icon, or a checkbox) for both column headers and the Total row. */
export function HeaderCell({ label, icon, checkbox = false, align = 'left', variant = 'header' }: HeaderCellProps) {
  if (checkbox) {
    return (
      <div className="flex justify-center">
        <input type="checkbox" style={{ accentColor: 'var(--action-primary)' }} />
      </div>
    );
  }

  const Icon = icon ? ICONS[icon] : null;

  return (
    <div
      style={variant === 'header' ? { font: 'var(--typography-label)' } : undefined}
      className={clsx(
        'flex items-center gap-token-1',
        variant === 'header' && 'text-text-secondary uppercase tracking-wide',
        variant === 'summary' && 'text-sm font-semibold text-text-primary',
        align === 'center' && 'justify-center',
      )}
    >
      {label}
      {Icon && <Icon />}
    </div>
  );
}
