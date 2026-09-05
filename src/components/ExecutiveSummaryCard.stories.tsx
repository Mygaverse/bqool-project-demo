import type { Meta, StoryObj } from '@storybook/react';
import { ExecutiveSummaryCard } from './ExecutiveSummaryCard';

const meta: Meta<typeof ExecutiveSummaryCard> = {
  title: 'Design System/Patterns/ExecutiveSummaryCard',
  component: ExecutiveSummaryCard,
};
export default meta;

type Story = StoryObj<typeof ExecutiveSummaryCard>;

const BASE = {
  headline: 'ACOS is trending up across Sponsored Products',
  takeaway:
    'ACOS rose from 24.1% to 28.4% over the last 14 days, concentrated in 2 campaigns. Non-converting search terms account for $212 of avoidable spend.',
  confidence: 'high' as const,
};

export const Warning: Story = { args: { ...BASE, tone: 'warning' } };
export const Critical: Story = { args: { ...BASE, tone: 'critical' } };
export const Opportunity: Story = { args: { ...BASE, tone: 'opportunity' } };
export const Neutral: Story = { args: { ...BASE, tone: 'neutral' } };
export const Limited: Story = { args: { ...BASE, tone: 'limited', confidence: 'low' } };
