import type { Meta, StoryObj } from '@storybook/react';
import { AdFormatPickerScreen } from './AdFormatPickerScreen';

const meta: Meta = {
  title: 'Design System/Patterns/Ad Format Picker',
};
export default meta;

type Story = StoryObj;

export const AdFormatPicker: Story = {
  render: () => <AdFormatPickerScreen />,
};
