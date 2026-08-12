import clsx from 'clsx';

export interface TabProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export function Tab({ label, active = false, onClick }: TabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'pb-token-2 text-sm border-b-2 -mb-px transition-colors',
        active ? 'border-action-primary text-text-primary font-semibold' : 'border-transparent text-text-secondary hover:text-text-primary',
      )}
    >
      {label}
    </button>
  );
}
