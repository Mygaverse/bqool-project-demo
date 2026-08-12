import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Design System/Components/Breadcrumb',
  component: Breadcrumb,
};
export default meta;

type Story = StoryObj<typeof Breadcrumb>;

export const TwoLevel: Story = { args: { items: ['Advertising', 'Dashboard'] } };
export const FourLevel: Story = { args: { items: ['Advertising', 'Ad Manager', 'Sponsored Products', 'Campaigns'] } };
