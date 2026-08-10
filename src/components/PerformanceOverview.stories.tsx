import type { Meta, StoryObj } from '@storybook/react';
import { PerformanceOverviewScreen } from './PerformanceOverviewScreen';

const meta: Meta = {
  title: 'Design System/Screens/Performance Overview',
};
export default meta;

type Story = StoryObj;

export const PerformanceOverview: Story = {
  render: () => <PerformanceOverviewScreen />,
};
