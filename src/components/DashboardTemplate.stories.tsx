import type { Meta, StoryObj } from '@storybook/react';
import { DashboardTemplate } from './DashboardTemplate';

const meta: Meta = {
  title: 'Design System/Templates/Dashboard',
};
export default meta;

type Story = StoryObj;

export const Dashboard: Story = {
  render: () => <DashboardTemplate />,
};
