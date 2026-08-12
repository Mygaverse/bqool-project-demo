import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Design System/Components/Tabs',
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    function Demo() {
      const [active, setActive] = useState('Campaigns');
      return (
        <Tabs
          tabs={['Goals', 'Campaigns', 'Ad Groups', 'Product Ads', 'Targeting', 'Search Terms']}
          active={active}
          onChange={setActive}
        />
      );
    }
    return <Demo />;
  },
};
