import type { Meta, StoryObj } from '@storybook/react';
import { DataHeader } from './DataHeader';
import { AIModeBadge } from './AIModeBadge';

const StarsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1.5 9.2 5.8 13.5 7 9.2 8.2 8 12.5 6.8 8.2 2.5 7 6.8 5.8 8 1.5Z" />
  </svg>
);

const JournalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="3" y="2.5" width="12" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M6.5 2.5v13" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const meta: Meta<typeof DataHeader> = {
  title: 'Design System/Patterns/DataHeader',
  component: DataHeader,
};
export default meta;

type Story = StoryObj<typeof DataHeader>;

export const SectionHeading: Story = {
  args: { icon: <StarsIcon />, title: 'Start with a skill', size: 'md' },
};

export const PanelHeaderInverted: Story = {
  args: {
    icon: <JournalIcon />,
    title: 'BQool Insight',
    subtitle: 'Grounded session intelligence, evidence, actions, and reports',
    badge: <AIModeBadge mode="live" inverted />,
    size: 'sm',
    inverted: true,
  },
  render: (args) => (
    <div className="bg-ai-insight-panel-bg-via p-token-4">
      <DataHeader {...args} />
    </div>
  ),
};

export const EyebrowWithStatusBadge: Story = {
  args: {
    title: 'Execution History',
    size: 'eyebrow',
    badge: (
      <span className="rounded-token-full bg-execution-history-card-status-pill-bg px-token-2 py-1 text-[8px] font-bold uppercase text-execution-history-card-status-pill-fg ring-1 ring-execution-history-card-status-pill-ring">
        completed
      </span>
    ),
    className: 'text-execution-history-card-heading-fg',
  },
};
