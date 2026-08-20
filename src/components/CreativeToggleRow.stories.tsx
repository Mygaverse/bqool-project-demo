import type { Meta, StoryObj } from '@storybook/react';
import { CreativeToggleRow } from './CreativeToggleRow';

const meta: Meta<typeof CreativeToggleRow> = {
  title: 'Design System/Patterns/CreativeToggleRow',
  component: CreativeToggleRow,
};
export default meta;

type Story = StoryObj<typeof CreativeToggleRow>;

export const Off: Story = { args: { label: 'Headline', enabled: false } };
export const RequiredError: Story = { args: { label: 'Logo', enabled: true, required: true } };
