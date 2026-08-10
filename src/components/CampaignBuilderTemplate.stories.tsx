import type { Meta, StoryObj } from '@storybook/react';
import { CampaignBuilderTemplate } from './CampaignBuilderTemplate';

const meta: Meta = {
  title: 'Design System/Templates/Campaign Builder',
};
export default meta;

type Story = StoryObj;

export const CampaignBuilder: Story = {
  render: () => <CampaignBuilderTemplate />,
};
