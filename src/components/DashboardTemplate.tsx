import { useState } from 'react';
import { Breadcrumb } from './Breadcrumb';
import { FilterBar } from './FilterBar';
import { Select } from './Select';
import { PerformanceOverviewScreen } from './PerformanceOverviewScreen';

/** Page Template: Breadcrumb + FilterBar + Performance Overview Screen. */
export function DashboardTemplate() {
  const [store, setStore] = useState('All Stores');
  const [adType, setAdType] = useState('All');
  const [currency, setCurrency] = useState('USD');
  const [range, setRange] = useState('Last 30 days');

  return (
    <div className="font-sans flex flex-col gap-token-6 p-token-6 bg-surface-subtle">
      <Breadcrumb items={['Advertising', 'Dashboard']} />
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
      <PerformanceOverviewScreen />
    </div>
  );
}
