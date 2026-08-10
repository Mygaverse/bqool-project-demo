import type { Meta, StoryObj } from '@storybook/react';
import { StatusCell } from './StatusCell';

const meta: Meta<typeof StatusCell> = {
  title: 'Design System/Patterns/StatusCell',
  component: StatusCell,
};
export default meta;

type Story = StoryObj<typeof StatusCell>;

export const Enabled: Story = { args: { enabled: true } };
export const Disabled: Story = { args: { enabled: false } };
export const WithLabel: Story = { args: { enabled: true, label: 'Advanced' } };
