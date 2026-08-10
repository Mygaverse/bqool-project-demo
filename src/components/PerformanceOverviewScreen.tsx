import { MetricCard } from './MetricCard';

const METRICS = [
  { title: 'Total Sales', value: '$18,204.50', previousValue: '$16,340.00', change: 11.4 },
  { title: 'Ad Sales', value: '$6,512.20', previousValue: '$7,108.90', change: -8.4 },
  { title: 'Ad Spend', value: '$1,704.35', previousValue: '$1,589.10', change: 7.3 },
  { title: 'ACOS', value: '26.2%', previousValue: '22.4%', change: -3.8 },
];

/** A Screen: grid of MetricCard patterns — the Performance Overview widget. */
export function PerformanceOverviewScreen() {
  return (
    <div className="font-sans grid grid-cols-2 lg:grid-cols-4 gap-token-4">
      {METRICS.map((metric) => (
        <MetricCard key={metric.title} {...metric} />
      ))}
    </div>
  );
}
