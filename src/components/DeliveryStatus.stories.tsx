import type { Meta, StoryObj } from '@storybook/react';
import { DeliveryStatus } from './DeliveryStatus';

const meta: Meta<typeof DeliveryStatus> = {
  title: 'Design System/DeliveryStatus',
  component: DeliveryStatus,
};
export default meta;

type Story = StoryObj<typeof DeliveryStatus>;

export const Delivering: Story = { args: { status: 'delivering' } };
export const Pending: Story = { args: { status: 'pending' } };
export const NotDelivering: Story = { args: { status: 'not-delivering' } };
