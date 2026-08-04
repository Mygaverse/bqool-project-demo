import type { Meta, StoryObj } from '@storybook/react';
import { StatusPill } from './StatusPill';

const meta: Meta<typeof StatusPill> = {
  title: 'Design System/StatusPill',
  component: StatusPill,
};
export default meta;

type Story = StoryObj<typeof StatusPill>;

export const Enabled: Story = { args: { status: 'enabled' } };
export const Paused: Story = { args: { status: 'paused' } };
export const Pending: Story = { args: { status: 'pending' } };
