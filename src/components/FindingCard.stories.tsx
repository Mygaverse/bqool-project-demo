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

export const Warning: Story = {
  args: {
    rank: 2,
    title: '$212 spent on non-converting search terms',
    severity: 'warning',
    detail: '14 search terms with 0 conversions accounted for 12% of Sponsored Products spend.',
    agent: 'Keyword Opportunity Finder · Search-term waste',
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
