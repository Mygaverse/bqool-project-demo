import type { Meta, StoryObj } from '@storybook/react';
import { ConfidenceBadge } from './ConfidenceBadge';

const meta: Meta<typeof ConfidenceBadge> = {
  title: 'Design System/Components/ConfidenceBadge',
  component: ConfidenceBadge,
};
export default meta;

type Story = StoryObj<typeof ConfidenceBadge>;

export const High: Story = { args: { level: 'high' } };
export const Moderate: Story = { args: { level: 'moderate' } };
export const Low: Story = { args: { level: 'low' } };
