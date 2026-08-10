import type { Meta, StoryObj } from '@storybook/react';
import { AdManagerTableScreen } from './AdManagerTableScreen';

const meta: Meta = {
  title: 'Design System/Screens/Ad Manager Table',
};
export default meta;

type Story = StoryObj;

export const AdManagerTable: Story = {
  render: () => <AdManagerTableScreen />,
};
