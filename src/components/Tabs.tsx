import clsx from 'clsx';

export interface TabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

export function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <div className="flex items-center gap-token-6 border-b border-surface-border font-sans">
      {tabs.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            type="button"
            onClick={() => onChange(tab)}
            className={clsx(
              'pb-token-2 text-sm border-b-2 -mb-px transition-colors',
              isActive ? 'border-action-primary text-text-primary font-semibold' : 'border-transparent text-text-secondary hover:text-text-primary',
            )}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}
