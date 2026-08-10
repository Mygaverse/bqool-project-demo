import type { Meta, StoryObj } from '@storybook/react';
import { AIStatusCell } from './AIStatusCell';

const meta: Meta<typeof AIStatusCell> = {
  title: 'Design System/Patterns/AIStatusCell',
  component: AIStatusCell,
};
export default meta;

type Story = StoryObj<typeof AIStatusCell>;

export const Enabled: Story = { args: { status: 'enabled', caption: '2/2 Ad Groups' } };
export const Paused: Story = { args: { status: 'paused', caption: '0/1 Ad Groups' } };
export const Pending: Story = { args: { status: 'pending', caption: 'Awaiting approval' } };
