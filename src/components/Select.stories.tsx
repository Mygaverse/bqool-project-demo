import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Select } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Design System/Components/Select',
  component: Select,
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Standalone: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = useState('Last 30 days');
      return <Select label="Date Range" value={value} options={['Last 7 days', 'Last 30 days', 'Last 90 days']} onChange={setValue} />;
    }
    return <Demo />;
  },
};

export const NoLabel: Story = {
  render: () => {
    function Demo() {
      const [value, setValue] = useState('USD');
      return <Select value={value} options={['USD', 'CAD', 'EUR']} onChange={setValue} />;
    }
    return <Demo />;
  },
};
