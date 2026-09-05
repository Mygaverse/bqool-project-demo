import type { Meta, StoryObj } from '@storybook/react';
import { GenerateReportPanel } from './GenerateReportPanel';

const meta: Meta<typeof GenerateReportPanel> = {
  title: 'Design System/Patterns/GenerateReportPanel',
  component: GenerateReportPanel,
};
export default meta;

type Story = StoryObj<typeof GenerateReportPanel>;

export const Default: Story = { args: {} };
