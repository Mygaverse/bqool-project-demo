import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Design System/Badge',
  component: Badge,
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Neutral: Story = { args: { tone: 'neutral', children: 'Auto-Budgeting' } };
export const Success: Story = { args: { tone: 'success', children: 'Shipped' } };
export const Warning: Story = { args: { tone: 'warning', children: 'In review' } };
export const Danger: Story = { args: { tone: 'danger', children: 'Blocked' } };

export const NeutralSolid: Story = { args: { tone: 'neutral', emphasis: 'solid', children: 'Auto-Budgeting' } };
export const SuccessSolid: Story = { args: { tone: 'success', emphasis: 'solid', children: 'Auto-Budgeting' } };
export const WarningSolid: Story = { args: { tone: 'warning', emphasis: 'solid', children: 'Auto-Budgeting' } };
export const DangerSolid: Story = { args: { tone: 'danger', emphasis: 'solid', children: 'Auto-Budgeting' } };
