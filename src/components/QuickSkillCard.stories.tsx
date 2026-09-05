import type { Meta, StoryObj } from '@storybook/react';
import { QuickSkillCard } from './QuickSkillCard';

const meta: Meta<typeof QuickSkillCard> = {
  title: 'Design System/Components/QuickSkillCard',
  component: QuickSkillCard,
};
export default meta;

type Story = StoryObj<typeof QuickSkillCard>;

export const Default: Story = {
  args: {
    label: 'Campaign audit',
    prompt: 'Audit my campaign performance for the last 14 days.',
  },
};
