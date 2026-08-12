import { Tab } from './Tab';

export interface TabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
}

/** A row of Tab instances sharing one baseline border — the Ad Manager sub-nav. */
export function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <div className="flex items-center gap-token-6 border-b border-surface-border font-sans">
      {tabs.map((tab) => (
        <Tab key={tab} label={tab} active={tab === active} onClick={() => onChange(tab)} />
      ))}
    </div>
  );
}
