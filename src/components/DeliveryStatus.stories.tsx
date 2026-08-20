import type { Meta, StoryObj } from '@storybook/react';
import { DeliveryStatus } from './DeliveryStatus';

const meta: Meta<typeof DeliveryStatus> = {
  title: 'Design System/Components/DeliveryStatus',
  component: DeliveryStatus,
};
export default meta;

type Story = StoryObj<typeof DeliveryStatus>;

export const Delivering: Story = { args: { status: 'delivering' } };
export const Limited: Story = { args: { status: 'limited' } };
export const NotDelivering: Story = { args: { status: 'not-delivering' } };
