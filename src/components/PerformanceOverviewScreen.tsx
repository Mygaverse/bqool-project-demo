import { MetricCard } from './MetricCard';
import { Button } from './Button';

const METRICS = [
  { title: 'Total Sales', value: '$18,204.50', previousValue: '$16,340.00', change: 11.4 },
  { title: 'Ad Spend', value: '$1,704.35', previousValue: '$1,589.10', change: 7.3 },
  { title: 'Ad Sales', value: '$6,512.20', previousValue: '$7,108.90', change: -8.4 },
  { title: 'ACOS', value: '26.2%', previousValue: '22.4%', change: -3.8 },
];

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/** A Screen: heading + add-metric action + grid of MetricCard patterns. */
export function PerformanceOverviewScreen() {
  return (
    <div className="font-sans bg-surface-default border border-surface-border rounded-token-lg shadow-resting p-token-6 flex flex-col gap-token-4">
      <div className="flex items-center justify-between">
        <h2 className="text-text-primary" style={{ font: 'var(--typography-heading-md)' }}>
          Performance Overview
        </h2>
        <Button variant="icon" aria-label="Add metric">
          <PlusIcon />
        </Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-token-4">
        {METRICS.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>
    </div>
  );
}
