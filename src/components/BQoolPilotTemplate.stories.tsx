import type { Meta, StoryObj } from '@storybook/react';
import { BQoolPilotTemplate } from './BQoolPilotTemplate';

const meta: Meta = {
  title: 'Design System/Templates/BQool Pilot',
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => (
    <div className="flex justify-end p-token-6">
      <BQoolPilotTemplate />
    </div>
  ),
};
