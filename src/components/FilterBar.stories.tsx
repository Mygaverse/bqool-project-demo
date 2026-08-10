import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FilterBar } from './FilterBar';
import { Select } from './Select';

const meta: Meta<typeof FilterBar> = {
  title: 'Design System/Patterns/FilterBar',
  component: FilterBar,
};
export default meta;

type Story = StoryObj<typeof FilterBar>;

export const Default: Story = {
  render: () => {
    function Demo() {
      const [store, setStore] = useState('All Stores');
      const [adType, setAdType] = useState('All');
      const [currency, setCurrency] = useState('USD');
      const [range, setRange] = useState('Last 30 days');
      return (
        <FilterBar>
          <Select variant="grouped" label="Store" value={store} options={['All Stores', 'Home Store', 'North Store']} onChange={setStore} />
          <Select
            variant="grouped"
            label="Ad Type"
            value={adType}
            options={['All', 'Sponsored Products', 'Sponsored Brands', 'Sponsored Display']}
            onChange={setAdType}
          />
          <Select variant="grouped" label="Currency" value={currency} options={['USD', 'CAD', 'EUR']} onChange={setCurrency} />
          <Select
            variant="grouped"
            label="Date Range"
            value={range}
            options={['Last 7 days', 'Last 30 days', 'Last 90 days']}
            onChange={setRange}
          />
        </FilterBar>
      );
    }
    return <Demo />;
  },
};
