import type { Meta, StoryObj } from '@storybook/react';
import { ChatBubble } from './ChatBubble';

const meta: Meta<typeof ChatBubble> = {
  title: 'Design System/Components/ChatBubble',
  component: ChatBubble,
};
export default meta;

type Story = StoryObj<typeof ChatBubble>;

export const User: Story = {
  args: { role: 'user', children: 'Audit my campaign performance for the last 14 days.' },
};

export const Assistant: Story = {
  args: {
    role: 'assistant',
    children: 'ACOS rose from 24.1% to 28.4% over the last 14 days, concentrated in 2 campaigns.',
    caption: 'Powered by Gemini 2.5 Pro',
  },
};
