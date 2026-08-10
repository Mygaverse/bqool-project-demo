import type { Meta, StoryObj } from '@storybook/react';
import { MetricCard } from './MetricCard';

const meta: Meta<typeof MetricCard> = {
  title: 'Design System/Patterns/MetricCard',
  component: MetricCard,
};
export default meta;

type Story = StoryObj<typeof MetricCard>;

export const Positive: Story = {
  args: { title: 'Total Sales', value: '$18,204.50', previousValue: '$16,340.00', change: 11.4 },
};

export const Negative: Story = {
  args: { title: 'ACOS', value: '32.6%', previousValue: '28.1%', change: -3.1 },
};
