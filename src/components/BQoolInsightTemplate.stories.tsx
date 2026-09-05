import type { Meta, StoryObj } from '@storybook/react';
import { BQoolInsightTemplate } from './BQoolInsightTemplate';

const meta: Meta = {
  title: 'Design System/Templates/BQool Insight',
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => <BQoolInsightTemplate />,
};
