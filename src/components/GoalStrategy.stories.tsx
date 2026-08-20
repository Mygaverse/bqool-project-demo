import type { Meta, StoryObj } from '@storybook/react';
import { GoalStrategyScreen } from './GoalStrategyScreen';

const meta: Meta = {
  title: 'Design System/Patterns/Goal Strategy',
};
export default meta;

type Story = StoryObj;

export const GoalStrategy: Story = {
  render: () => <GoalStrategyScreen />,
};
