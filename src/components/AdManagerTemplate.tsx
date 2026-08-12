import { useState } from 'react';
import { Breadcrumb } from './Breadcrumb';
import { FilterBar } from './FilterBar';
import { Select } from './Select';
import { MultiSelect } from './MultiSelect';
import { Tabs } from './Tabs';
import { Pagination } from './Pagination';
import { AdManagerTableScreen } from './AdManagerTableScreen';

const STORES = ['Home Store', 'North Store'];

/** Page Template: Breadcrumb + Tabs + FilterBar + Ad Manager Table Screen + Pagination. */
export function AdManagerTemplate() {
  const [stores, setStores] = useState(STORES);
  const [adType, setAdType] = useState('Sponsored Products');
  const [range, setRange] = useState('Last 30 days');
  const [tab, setTab] = useState('Campaigns');
  const [page, setPage] = useState(1);

  return (
    <div className="font-sans flex flex-col gap-token-6 p-token-6 bg-surface-subtle">
      <Breadcrumb items={['Advertising', 'Ad Manager', 'Sponsored Products', 'Campaigns']} />
      <Tabs tabs={['Goals', 'Campaigns', 'Ad Groups', 'Product Ads', 'Targeting', 'Search Terms']} active={tab} onChange={setTab} />
      <FilterBar>
        <MultiSelect variant="grouped" label="Store" values={stores} options={STORES} onChange={setStores} />
        <Select
          variant="grouped"
          label="Ad Type"
          value={adType}
          options={['Sponsored Products', 'Sponsored Brands', 'Sponsored Display']}
          onChange={setAdType}
        />
        <Select
          variant="grouped"
          label="Date Range"
          value={range}
          options={['Last 7 days', 'Last 30 days', 'Last 90 days']}
          onChange={setRange}
        />
      </FilterBar>
      <AdManagerTableScreen />
      <div className="bg-surface-default border border-surface-border rounded-token-lg shadow-resting">
        <Pagination page={page} totalPages={3} rangeStart={1} rangeEnd={5} totalResults={11} onPageChange={setPage} />
      </div>
    </div>
  );
}
