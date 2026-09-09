import type { Meta, StoryObj } from '@storybook/react';
import { ExecutionHistoryTimeline } from './ExecutionHistoryTimeline';

const meta: Meta<typeof ExecutionHistoryTimeline> = {
  title: 'Design System/Patterns/ExecutionHistoryTimeline',
  component: ExecutionHistoryTimeline,
};
export default meta;

type Story = StoryObj<typeof ExecutionHistoryTimeline>;

export const Completed: Story = {
  args: {
    status: 'completed',
    stages: [
      { id: 'understand', label: 'Understand request', status: 'completed' },
      { id: 'prepare', label: 'Prepare task plan', status: 'completed' },
      { id: 'retrieve', label: 'Retrieve evidence', status: 'completed' },
      { id: 'analyze', label: 'Analyze findings', status: 'completed' },
      { id: 'respond', label: 'Prepare response', status: 'completed' },
    ],
    events: [
      { id: 'e1', type: 'task started', timestamp: 'Sep 3, 9:14 AM', summary: 'Started campaign performance audit for the last 14 days.' },
      { id: 'e2', type: 'evidence gathered', timestamp: 'Sep 3, 9:14 AM', summary: 'Pulled 14 days of campaign, ad group, and search-term stats.' },
      { id: 'e3', type: 'synthesis complete', timestamp: 'Sep 3, 9:15 AM', summary: 'Ranked 3 findings and 2 recommendations from grounded evidence.' },
    ],
  },
};

export const InProgress: Story = {
  args: {
    ...Completed.args,
    status: 'running',
    stages: [
      { id: 'understand', label: 'Understand request', status: 'completed' },
      { id: 'prepare', label: 'Prepare task plan', status: 'completed' },
      { id: 'retrieve', label: 'Retrieve evidence', status: 'active' },
      { id: 'analyze', label: 'Analyze findings', status: 'pending' },
      { id: 'respond', label: 'Prepare response', status: 'pending' },
    ],
  },
};
