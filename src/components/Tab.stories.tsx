import type { Meta, StoryObj } from '@storybook/react';
import { Tab } from './Tab';

const meta: Meta<typeof Tab> = {
  title: 'Design System/Components/Tab',
  component: Tab,
};
export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = { args: { label: 'Campaigns', active: false } };
export const Active: Story = { args: { label: 'Campaigns', active: true } };
