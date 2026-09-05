import type { Meta, StoryObj } from '@storybook/react';
import { ChatComposer } from './ChatComposer';

const meta: Meta<typeof ChatComposer> = {
  title: 'Design System/Patterns/ChatComposer',
  component: ChatComposer,
};
export default meta;

type Story = StoryObj<typeof ChatComposer>;

export const Default: Story = { args: {}, render: (args) => <div className="w-96"><ChatComposer {...args} /></div> };
