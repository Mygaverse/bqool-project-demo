import { useState } from 'react';
import { Breadcrumb } from './Breadcrumb';
import { FilterBar } from './FilterBar';
import { Select } from './Select';
import { MultiSelect } from './MultiSelect';
import { Button } from './Button';
import { PerformanceOverviewScreen } from './PerformanceOverviewScreen';

const STORES = ['Home Store', 'North Store'];
const AD_TYPES = ['Sponsored Products', 'Sponsored Brands', 'Sponsored Display'];

const FilterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 2h12M3.5 7h7M6 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const EyeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 7s2.5-4.5 6-4.5S13 7 13 7s-2.5 4.5-6 4.5S1 7 1 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

/** Page Template: Breadcrumb + FilterBar + toolbar row + Performance Overview Screen. */
export function DashboardTemplate() {
  const [stores, setStores] = useState(STORES);
  const [adTypes, setAdTypes] = useState(AD_TYPES);
  const [currency, setCurrency] = useState('USD');
  const [range, setRange] = useState('Last 30 days');
  const [favoriteFilter, setFavoriteFilter] = useState('Favorite Filter');

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

      <div className="flex flex-wrap items-center gap-token-3">
        <Button variant="secondary">
          <FilterIcon /> Custom Filters
        </Button>
        <Select value={favoriteFilter} options={['Favorite Filter']} onChange={setFavoriteFilter} className="min-w-[160px]" />
        <div className="flex-1" />
        <Button variant="secondary">
          <EyeIcon /> Preview Report
        </Button>
      </div>

      <PerformanceOverviewScreen />
    </div>
  );
}
