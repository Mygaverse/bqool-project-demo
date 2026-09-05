import type { Meta, StoryObj } from '@storybook/react';
import { RecommendationCard } from './RecommendationCard';

const meta: Meta<typeof RecommendationCard> = {
  title: 'Design System/Patterns/RecommendationCard',
  component: RecommendationCard,
};
export default meta;

type Story = StoryObj<typeof RecommendationCard>;

export const ReadyToSimulate: Story = {
  args: {
    index: 1,
    kindLabel: 'Budget',
    priorityLabel: 'High',
    readinessLabel: 'Ready to simulate',
    readinessTone: 'positive',
    action: 'Reduce budget on 2 underperforming campaigns',
    rationale: 'Reallocating $150/day from underperforming campaigns to top performers is projected to lower blended ACOS by ~3 points.',
    description: 'Simulation only — no live changes until you approve.',
    actionLabel: 'Approve & simulate',
  },
};

export const NeedsReview: Story = {
  args: {
    ...ReadyToSimulate.args,
    index: 2,
    readinessLabel: 'Needs review',
    readinessTone: 'warning',
    action: 'Pause 14 non-converting search terms',
    actionLabel: 'Review terms',
  },
};
