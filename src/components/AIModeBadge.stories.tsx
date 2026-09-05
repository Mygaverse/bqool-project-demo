import type { Meta, StoryObj } from '@storybook/react';
import { AIModeBadge } from './AIModeBadge';

const meta: Meta<typeof AIModeBadge> = {
  title: 'Design System/Components/AIModeBadge',
  component: AIModeBadge,
};
export default meta;

type Story = StoryObj<typeof AIModeBadge>;

export const Live: Story = { args: { mode: 'live' } };
export const Sandbox: Story = { args: { mode: 'sandbox' } };
export const Cached: Story = { args: { mode: 'cached' } };
export const Degraded: Story = { args: { mode: 'degraded' } };

export const LiveInverted: Story = {
  args: { mode: 'live', inverted: true },
  render: (args) => (
    <div className="bg-ai-insight-panel-bg-via p-token-4">
      <AIModeBadge {...args} />
    </div>
  ),
};
