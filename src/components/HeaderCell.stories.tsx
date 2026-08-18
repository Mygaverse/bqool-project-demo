import type { Meta, StoryObj } from '@storybook/react';
import { HeaderCell } from './HeaderCell';

const meta: Meta<typeof HeaderCell> = {
  title: 'Design System/Components/HeaderCell',
  component: HeaderCell,
};
export default meta;

type Story = StoryObj<typeof HeaderCell>;

export const PlainLabel: Story = { args: { label: 'Actions', align: 'center' } };
export const Sortable: Story = { args: { label: 'Campaigns', icon: 'sort' } };
export const WithInfo: Story = { args: { label: 'AI-Bidding', icon: 'info' } };
export const WithEdu: Story = { args: { label: 'Daily Budget', icon: 'edu' } };
export const Checkbox: Story = { args: { checkbox: true } };
