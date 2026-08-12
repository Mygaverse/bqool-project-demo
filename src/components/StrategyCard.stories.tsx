import type { Meta, StoryObj } from '@storybook/react';
import { StrategyCard } from './StrategyCard';

const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

const meta: Meta<typeof StrategyCard> = {
  title: 'Design System/Patterns/StrategyCard',
  component: StrategyCard,
};
export default meta;

type Story = StoryObj<typeof StrategyCard>;

export const Selected: Story = {
  args: {
    icon: <TargetIcon />,
    title: 'Remarketing',
    description: 'Reach shoppers who interacted with your products and those familiar with the category to encourage them to complete their purchase.',
    bestFor: [
      'Sellers wanting to recover high-intent shoppers.',
      'Products with good traffic but low conversion.',
      'Promotions or product launches needing retargeting.',
    ],
    selected: true,
  },
};

export const Unselected: Story = {
  args: { ...Selected.args, selected: false },
};
