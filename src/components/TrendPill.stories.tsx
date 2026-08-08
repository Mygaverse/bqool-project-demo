import type { Meta, StoryObj } from '@storybook/react';
import { TrendPill } from './TrendPill';

const meta: Meta<typeof TrendPill> = {
  title: 'Design System/TrendPill',
  component: TrendPill,
};
export default meta;

type Story = StoryObj<typeof TrendPill>;

export const Positive: Story = { args: { value: 9.2 } };
export const Negative: Story = { args: { value: -1.0 } };
