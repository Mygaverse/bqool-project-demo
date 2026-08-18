import { useState } from 'react';
import { Badge } from './Badge';
import { DeliveryStatus } from './DeliveryStatus';
import { Button } from './Button';
import { EntityCell } from './EntityCell';
import { StatusCell } from './StatusCell';
import { BudgetCell } from './BudgetCell';
import { AIStatusCell } from './AIStatusCell';
import { HeaderCell } from './HeaderCell';

const GearIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M9.05 1a1 1 0 0 1 .967.744L10.291 3.3a5.99 5.99 0 0 1 1.235.712l1.487-.545a1 1 0 0 1 1.216.44l.949 1.644a1 1 0 0 1-.23 1.298l-1.166 1.005a6.05 6.05 0 0 1 0 1.427l1.166 1.005a1 1 0 0 1 .23 1.298l-.949 1.644a1 1 0 0 1-1.216.44l-1.487-.545a5.99 5.99 0 0 1-1.235.712l-.274 1.556a1 1 0 0 1-.967.744H6.95a1 1 0 0 1-.967-.744L5.709 12.7a5.99 5.99 0 0 1-1.235-.712l-1.487.545a1 1 0 0 1-1.216-.44L.822 10.45a1 1 0 0 1 .23-1.298l1.166-1.005a6.05 6.05 0 0 1 0-1.427L1.052 5.715a1 1 0 0 1-.23-1.298l.949-1.644a1 1 0 0 1 1.216-.44l1.487.545A5.99 5.99 0 0 1 5.709 2.3L5.983 1.744A1 1 0 0 1 6.95 1h2.1ZM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
  </svg>
);

export interface AdManagerRow {
  id: string;
  enabled: boolean;
  name: string;
  store: string;
  adType: string;
  goal: string;
  goalTier: string;
  budget: number | null;
  aiBidding: 'enabled' | 'paused';
  biddingGroups: string;
  aiHarvesting: 'enabled' | 'paused';
  harvestingGroups: string;
  delivery: 'delivering' | 'pending' | 'not-delivering';
  portfolio: string;
}

export const AD_MANAGER_ROWS: AdManagerRow[] = [
  {
    id: '1', enabled: false, name: 'SP | Wireless Earbuds | Auto', store: '🇺🇸 Home Store', adType: 'SP',
    goal: 'Growth Plan', goalTier: 'Basic', budget: null,
    aiBidding: 'paused', biddingGroups: '0/1 Ad Groups', aiHarvesting: 'paused', harvestingGroups: '0/1 Ad Groups',
    delivery: 'not-delivering', portfolio: '-',
  },
  {
    id: '2', enabled: true, name: 'SP | Yoga Mat | Manual Exact', store: '🇺🇸 Home Store', adType: 'SP',
    goal: 'Launch Strategy', goalTier: 'Basic', budget: 100,
    aiBidding: 'enabled', biddingGroups: '2/2 Ad Groups', aiHarvesting: 'enabled', harvestingGroups: '2/2 Ad Groups',
    delivery: 'delivering', portfolio: 'Q1 Strategy',
  },
  {
    id: '3', enabled: true, name: 'SP | Desk Lamp | Manual Phrase', store: '🇨🇦 North Store', adType: 'SP',
    goal: 'Defensive', goalTier: 'Basic', budget: 100,
    aiBidding: 'paused', biddingGroups: '0/1 Ad Groups', aiHarvesting: 'paused', harvestingGroups: '0/1 Ad Groups',
    delivery: 'not-delivering', portfolio: 'Defensive',
  },
  {
    id: '4', enabled: false, name: 'SP | Travel Mug | Brand Defense', store: '🇺🇸 Home Store', adType: 'SP',
    goal: 'Brand Protect', goalTier: 'Brand-Based', budget: 85,
    aiBidding: 'enabled', biddingGroups: '1/1 Ad Groups', aiHarvesting: 'enabled', harvestingGroups: '1/1 Ad Groups',
    delivery: 'delivering', portfolio: 'Core Products',
  },
];

const toggleAI = (status: 'enabled' | 'paused'): 'enabled' | 'paused' => (status === 'enabled' ? 'paused' : 'enabled');

// A Screen: composed entirely from Patterns (EntityCell, StatusCell,
// BudgetCell, AIStatusCell) plus a few bare Components, grounded in
// sp-campaigns-columns.tsx / StatusCell.tsx / BudgetCell.tsx and the
// user's own table mockup.
export function AdManagerTableScreen() {
  const [rows, setRows] = useState(AD_MANAGER_ROWS);

  const total = rows.reduce((sum, row) => sum + (row.budget ?? 0), 0);

  const updateRow = (id: string, patch: Partial<AdManagerRow>) =>
    setRows((r) => r.map((x) => (x.id === id ? { ...x, ...patch } : x)));

  return (
    <div className="font-sans bg-surface-default border border-surface-border rounded-token-lg shadow-resting overflow-x-auto">
      <table className="text-sm">
        <thead className="bg-surface-selected">
          <tr>
            <th className="px-token-4 py-token-3"><HeaderCell checkbox /></th>
            <th className="px-token-4 py-token-3"><HeaderCell label="Actions" align="center" /></th>
            <th className="px-token-4 py-token-3"><HeaderCell label="Status" align="center" /></th>
            <th className="px-token-4 py-token-3"><HeaderCell label="Campaigns" icon="sort" /></th>
            <th className="px-token-4 py-token-3"><HeaderCell label="Goals" icon="sort" /></th>
            <th className="px-token-4 py-token-3"><HeaderCell label="Daily Budget" icon="edu" /></th>
            <th className="px-token-4 py-token-3"><HeaderCell label="AI-Bidding" icon="info" /></th>
            <th className="px-token-4 py-token-3"><HeaderCell label="AI-Harvesting" icon="info" /></th>
            <th className="px-token-4 py-token-3"><HeaderCell label="Delivery Status" icon="sort" /></th>
            <th className="px-token-4 py-token-3"><HeaderCell label="Portfolio" /></th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-surface-subtle border-t border-surface-border">
            <td colSpan={5} className="px-token-4 py-token-2"><HeaderCell label="Total" variant="summary" /></td>
            <td className="px-token-4 py-token-2"><HeaderCell label={`$${total.toFixed(2)}`} variant="summary" /></td>
            <td colSpan={4} />
          </tr>
          {rows.map((row) => (
            <tr key={row.id} className="border-t border-surface-border align-top">
              <td className="px-token-4 py-token-3 text-center">
                <input type="checkbox" style={{ accentColor: 'var(--action-primary)' }} />
              </td>
              <td className="px-token-4 py-token-3 text-center">
                <Button variant="icon" aria-label="Manage campaign">
                  <GearIcon />
                </Button>
              </td>
              <td className="px-token-4 py-token-3">
                <StatusCell enabled={row.enabled} onToggle={(enabled) => updateRow(row.id, { enabled })} />
              </td>
              <td className="px-token-4 py-token-3">
                <EntityCell
                  title={row.name}
                  badges={[
                    <Badge key="store" tone="neutral">{row.store}</Badge>,
                    <Badge key="type" tone="neutral" emphasis="solid">{row.adType}</Badge>,
                  ]}
                />
              </td>
              <td className="px-token-4 py-token-3">
                <EntityCell title={row.goal} badges={[<Badge key="tier" tone="neutral">{row.goalTier}</Badge>]} />
              </td>
              <td className="px-token-4 py-token-3">
                <BudgetCell
                  value={row.budget}
                  invalid={row.budget === null}
                  onChange={(budget) => updateRow(row.id, { budget })}
                />
              </td>
              <td className="px-token-4 py-token-3">
                <AIStatusCell
                  status={row.aiBidding}
                  caption={row.biddingGroups}
                  onToggle={() => updateRow(row.id, { aiBidding: toggleAI(row.aiBidding) })}
                />
              </td>
              <td className="px-token-4 py-token-3">
                <AIStatusCell
                  status={row.aiHarvesting}
                  caption={row.harvestingGroups}
                  onToggle={() => updateRow(row.id, { aiHarvesting: toggleAI(row.aiHarvesting) })}
                />
              </td>
              <td className="px-token-4 py-token-3">
                <DeliveryStatus status={row.delivery} />
              </td>
              <td className="px-token-4 py-token-3 text-text-primary">{row.portfolio}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
