import { useState } from 'react';
import { Breadcrumb } from './Breadcrumb';
import { FilterBar } from './FilterBar';
import { Select } from './Select';
import { MultiSelect } from './MultiSelect';
import { PerformanceOverviewScreen } from './PerformanceOverviewScreen';

const STORES = ['Home Store', 'North Store'];
const AD_TYPES = ['Sponsored Products', 'Sponsored Brands', 'Sponsored Display'];

/** Page Template: Breadcrumb + FilterBar + Performance Overview Screen. */
export function DashboardTemplate() {
  const [stores, setStores] = useState(STORES);
  const [adTypes, setAdTypes] = useState(AD_TYPES);
  const [currency, setCurrency] = useState('USD');
  const [range, setRange] = useState('Last 30 days');

  return (
    <div className="font-sans flex flex-col gap-token-6 p-token-6 bg-surface-subtle">
      <Breadcrumb items={['Advertising', 'Dashboard']} />
      <FilterBar>
        <MultiSelect variant="grouped" label="Store" values={stores} options={STORES} onChange={setStores} />
        <MultiSelect variant="grouped" label="Ad Type" values={adTypes} options={AD_TYPES} onChange={setAdTypes} />
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
