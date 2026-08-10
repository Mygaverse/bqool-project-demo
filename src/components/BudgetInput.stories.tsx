import type { Meta, StoryObj } from '@storybook/react';
import { BudgetInput } from './BudgetInput';

const meta: Meta<typeof BudgetInput> = {
  title: 'Design System/BudgetInput',
  component: BudgetInput,
};
export default meta;

type Story = StoryObj<typeof BudgetInput>;

export const Default: Story = { args: { value: 100 } };
export const Invalid: Story = { args: { value: null, invalid: true } };
