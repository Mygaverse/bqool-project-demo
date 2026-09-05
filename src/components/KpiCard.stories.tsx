import type { Meta, StoryObj } from '@storybook/react';
import { KpiCard } from './KpiCard';

const meta: Meta<typeof KpiCard> = {
  title: 'Design System/Patterns/KpiCard',
  component: KpiCard,
};
export default meta;

type Story = StoryObj<typeof KpiCard>;

export const Default: Story = { args: { label: 'ACOS', value: '28.4%' } };
