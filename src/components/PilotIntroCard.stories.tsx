import type { Meta, StoryObj } from '@storybook/react';
import { PilotIntroCard } from './PilotIntroCard';

const meta: Meta<typeof PilotIntroCard> = {
  title: 'Design System/Patterns/PilotIntroCard',
  component: PilotIntroCard,
};
export default meta;

type Story = StoryObj<typeof PilotIntroCard>;

export const Default: Story = {
  args: {
    skills: [
      { skillId: 'performance-analyzer', label: 'Campaign audit', prompt: 'Audit my campaign performance for the last 14 days.' },
      { skillId: 'trend-analyzer', label: 'Period comparison', prompt: 'Compare my campaign performance over the last 14 days and explain what changed.' },
      { skillId: 'keyword-opportunity-finder', label: 'Search-term waste', prompt: 'Find wasteful search terms for the last 14 days.' },
      { skillId: 'budget-opportunity-analyzer', label: 'Budget opportunities', prompt: 'Find budget optimization opportunities for the last 14 days.' },
    ],
  },
  render: (args) => <div className="w-96"><PilotIntroCard {...args} /></div>,
};
