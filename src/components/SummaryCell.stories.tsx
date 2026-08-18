import type { Meta, StoryObj } from '@storybook/react';
import { SummaryCell } from './SummaryCell';

const meta: Meta<typeof SummaryCell> = {
  title: 'Design System/Components/SummaryCell',
  component: SummaryCell,
};
export default meta;

type Story = StoryObj<typeof SummaryCell>;

export const Label: Story = { args: { children: 'Total' } };
export const Value: Story = { args: { children: '$378.00' } };
