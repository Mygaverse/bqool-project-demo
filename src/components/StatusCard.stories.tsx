import type { Meta, StoryObj } from '@storybook/react';
import { StatusCard } from './StatusCard';

const meta: Meta<typeof StatusCard> = {
  title: 'Design System/Patterns/StatusCard',
  component: StatusCard,
};
export default meta;

type Story = StoryObj<typeof StatusCard>;

export const Provider: Story = { args: { label: 'Provider', value: 'Deterministic', detail: 'degraded' } };
export const Execution: Story = { args: { label: 'Execution', value: 'Completed', detail: '10 evidence · 3 findings' } };
export const Confidence: Story = { args: { label: 'Confidence', value: 'Low Evidence Confidence', detail: 'At least one cited data source is stale.' } };
