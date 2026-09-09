import type { Meta, StoryObj } from '@storybook/react';
import { FindingCard } from './FindingCard';

const meta: Meta<typeof FindingCard> = {
  title: 'Design System/Patterns/FindingCard',
  component: FindingCard,
};
export default meta;

type Story = StoryObj<typeof FindingCard>;

export const Critical: Story = {
  args: {
    rank: 1,
    title: 'ACOS rose 18% week-over-week',
    severity: 'critical',
    detail: 'Sponsored Products ACOS climbed from 24.1% to 28.4%, driven by two campaigns with rising CPCs.',
    agent: 'Performance Analyzer · Campaign audit',
  },
};

export const WithTagsMetricsAndEvidence: Story = {
  args: {
    rank: 1,
    title: 'premium phone accessories',
    tags: ['Review', 'High priority', 'Evidence review'],
    severity: 'warning',
    metrics: [
      { label: 'ACOS', value: '38.66%' },
      { label: 'ROAS', value: '2.59x' },
      { label: 'Spend', value: '$44.06' },
      { label: 'Sales', value: '$113.97' },
    ],
    detail: 'SALES: $113.97 | SPEND: $44.06 | ACOS: 38.66% | ROAS: 2.59x | ORDERS: 0 | CVR: 0% — ACOS is 8.66 points above the 30% target; ROAS is 0.91x below the 3.5x target.',
    agent: 'Keywords Agent · Keyword Opportunity Finder',
    evidenceCount: 1,
    onReviewEvidence: () => {},
  },
};

export const TagsOnlyNoMetricsOrSeverity: Story = {
  args: {
    rank: 2,
    title: 'Review efficiency driver for SP | Core Products | Manual',
    tags: ['Review', 'High priority', 'Evidence review'],
    detail: 'The cited entity shows the strongest observed efficiency risk and should be investigated before any simulated adjustment.',
    agent: '1 evidence record · 1 entity · 5 observed days · Low evidence support',
    evidenceCount: 1,
    onReviewEvidence: () => {},
  },
};

export const Opportunity: Story = {
  args: {
    rank: 3,
    title: '3 campaigns are budget-constrained',
    severity: 'opportunity',
    detail: 'These campaigns hit their daily budget before 6pm on 9 of the last 14 days, capping otherwise profitable spend.',
    agent: 'Budget Opportunity Analyzer · Budget opportunities',
  },
};
