import type { Meta, StoryObj } from '@storybook/react';
import { DataStrip } from './DataStrip';

const meta: Meta<typeof DataStrip> = {
  title: 'Design System/Patterns/DataStrip',
  component: DataStrip,
};
export default meta;

type Story = StoryObj<typeof DataStrip>;

export const Default: Story = {
  args: {
    title: 'Campaign audit',
    description: 'Audit my campaign performance for the last 14 days.',
  },
};

export const Clickable: Story = {
  args: { ...Default.args, onClick: () => {} },
};

export const PlainValue: Story = {
  args: {
    title: 'Deterministic',
    description: 'degraded',
    titleClassName: 'text-text-primary font-normal',
  },
};
