import type { Meta, StoryObj } from '@storybook/react';
import { EntityCell } from './EntityCell';
import { Badge } from './Badge';

const meta: Meta<typeof EntityCell> = {
  title: 'Design System/Patterns/EntityCell',
  component: EntityCell,
};
export default meta;

type Story = StoryObj<typeof EntityCell>;

export const Campaign: Story = {
  args: {
    title: 'SP | Wireless Earbuds | Auto',
    badges: [
      <Badge key="store" tone="neutral">🇺🇸 Home Store</Badge>,
      <Badge key="type" tone="neutral" emphasis="solid">SP</Badge>,
    ],
  },
};

export const Goal: Story = {
  args: {
    title: 'Launch Strategy',
    badges: [<Badge key="tier" tone="neutral">Basic</Badge>],
  },
};

export const NoBadges: Story = {
  args: { title: 'Unassigned Campaign' },
};
