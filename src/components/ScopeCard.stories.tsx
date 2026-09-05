import type { Meta, StoryObj } from '@storybook/react';
import { ScopeCard } from './ScopeCard';

const meta: Meta<typeof ScopeCard> = {
  title: 'Design System/Components/ScopeCard',
  component: ScopeCard,
};
export default meta;

type Story = StoryObj<typeof ScopeCard>;

export const Default: Story = { args: { label: 'Period', value: 'Last 14 days' } };
export const Warning: Story = { args: { label: 'Coverage', value: 'Partial', warning: true } };
