import type { Meta, StoryObj } from '@storybook/react';
import { AdManagerTemplate } from './AdManagerTemplate';

const meta: Meta = {
  title: 'Design System/Templates/Ad Manager',
};
export default meta;

type Story = StoryObj;

export const AdManager: Story = {
  render: () => <AdManagerTemplate />,
};
