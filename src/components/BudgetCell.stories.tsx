import type { Meta, StoryObj } from '@storybook/react';
import { BudgetCell } from './BudgetCell';

const meta: Meta<typeof BudgetCell> = {
  title: 'Design System/Patterns/BudgetCell',
  component: BudgetCell,
};
export default meta;

type Story = StoryObj<typeof BudgetCell>;

export const Manual: Story = { args: { value: 100 } };
export const Auto: Story = { args: { value: 42.5, isAuto: true } };
export const Invalid: Story = { args: { value: null, invalid: true } };
