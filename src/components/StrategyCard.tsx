import type { ReactNode } from 'react';
import { Card } from './Card';

export interface StrategyCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bestFor: string[];
  selected?: boolean;
  onClick?: () => void;
}

/** Card + icon + "Best for" list + a selected checkmark badge — Campaign Builder's Goal Strategy picker. */
export function StrategyCard({ icon, title, description, bestFor, selected = false, onClick }: StrategyCardProps) {
  return (
    <Card selected={selected} onClick={onClick} className="relative cursor-pointer flex flex-col gap-token-3 w-56">
      {selected && (
        <span className="absolute -top-2 -right-2 h-6 w-6 rounded-token-full bg-action-primary text-text-inverse flex items-center justify-center text-xs">
          ✓
        </span>
      )}
      <div className="text-action-primary">{icon}</div>
      <h3 className="text-text-primary" style={{ font: 'var(--typography-heading-md)' }}>
        {title}
      </h3>
      <p className="text-text-secondary" style={{ font: 'var(--typography-caption)' }}>
        {description}
      </p>
      <div className="flex flex-col gap-1 mt-token-2">
        <span className="text-xs font-semibold text-text-primary">Best for</span>
        <ul className="flex flex-col gap-1">
          {bestFor.map((item) => (
            <li key={item} className="flex items-start gap-token-2 text-xs text-text-secondary">
              <span className="text-action-primary">★</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
