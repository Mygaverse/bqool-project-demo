import type { Meta, StoryObj } from '@storybook/react';
import { StatusPill } from './StatusPill';
import { Badge } from './Badge';
import { DeliveryStatus } from './DeliveryStatus';
import { TrendPill } from './TrendPill';
import { Button } from './Button';

const meta: Meta = {
  title: 'Design System/Pages/Ad Manager Table',
};
export default meta;

type Story = StoryObj;

interface Row {
  status: 'enabled' | 'paused' | 'pending';
  name: string;
  adType: string;
  delivery: 'delivering' | 'pending' | 'not-delivering';
  budget: number;
  trend: number;
}

const ROWS: Row[] = [
  { status: 'enabled', name: 'Wireless Earbuds — Auto Targeting', adType: 'SP', delivery: 'delivering', budget: 42.5, trend: 6.4 },
  { status: 'paused', name: 'Yoga Mat — Prospecting', adType: 'SB', delivery: 'not-delivering', budget: 18.0, trend: -3.1 },
  { status: 'pending', name: 'Desk Lamp — Retargeting', adType: 'SD', delivery: 'pending', budget: 25.75, trend: 1.2 },
  { status: 'enabled', name: 'Travel Mug — Brand Defense', adType: 'SP', delivery: 'delivering', budget: 60.0, trend: 12.8 },
];

// Composed from real Ad Manager table structure (status column, entity-cell
// name+badge, budget cell) plus the case-study redesign components
// (StatusPill, DeliveryStatus, TrendPill) layered on top.
export const AdManagerTable: Story = {
  render: () => (
    <div className="font-sans bg-surface-default border border-surface-border rounded-token-lg shadow-resting overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-surface-selected">
          <tr className="text-xs font-semibold text-text-secondary uppercase tracking-wide">
            <th className="px-token-4 py-token-3 text-left">Status</th>
            <th className="px-token-4 py-token-3 text-left">Campaign</th>
            <th className="px-token-4 py-token-3 text-left">Delivery</th>
            <th className="px-token-4 py-token-3 text-left">Daily Budget</th>
            <th className="px-token-4 py-token-3 text-left">ACOS Trend</th>
            <th className="px-token-4 py-token-3 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {ROWS.map((row) => (
            <tr key={row.name} className="border-t border-surface-border">
              <td className="px-token-4 py-token-3">
                <StatusPill status={row.status} />
              </td>
              <td className="px-token-4 py-token-3">
                <div className="flex flex-col gap-1.5">
                  <span className="text-action-theme font-medium hover:underline cursor-pointer">{row.name}</span>
                  <Badge tone="neutral">{row.adType}</Badge>
                </div>
              </td>
              <td className="px-token-4 py-token-3">
                <DeliveryStatus status={row.delivery} />
              </td>
              <td className="px-token-4 py-token-3">
                <div className="flex items-center gap-token-2">
                  <span className="text-text-primary font-medium">${row.budget.toFixed(2)}</span>
                  <Badge tone="neutral">Auto</Badge>
                </div>
              </td>
              <td className="px-token-4 py-token-3">
                <TrendPill value={row.trend} />
              </td>
              <td className="px-token-4 py-token-3 text-right">
                <Button variant="secondary">Manage</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
};
