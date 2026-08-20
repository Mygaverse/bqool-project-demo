import { useState } from 'react';
import { Breadcrumb } from './Breadcrumb';
import { FilterBar } from './FilterBar';
import { Select } from './Select';
import { MultiSelect } from './MultiSelect';
import { Tabs } from './Tabs';
import { Pagination } from './Pagination';
import { Input } from './Input';
import { Button } from './Button';
import { AdManagerTableScreen } from './AdManagerTableScreen';

const STORES = ['Home Store', 'North Store'];

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
    <path d="m9.5 9.5 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const FilterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1 2h12M3.5 7h7M6 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ColumnsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <rect x="1" y="2" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5" />
    <path d="M5.5 2v10M9 2v10" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 1v8m0 0 3-3m-3 3L4 6M1.5 11.5v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChartIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M1.5 12.5h11M4 12V7M7 12V3M10 12V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/** Page Template: Breadcrumb + Tabs + FilterBar + toolbar row + Ad Manager Table Screen + Pagination. */
export function AdManagerTemplate() {
  const [stores, setStores] = useState(STORES);
  const [adType, setAdType] = useState('Sponsored Products');
  const [range, setRange] = useState('Last 30 days');
  const [tab, setTab] = useState('Campaigns');
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [adStatus, setAdStatus] = useState('1 Selected');

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

      <div className="flex flex-wrap items-center gap-token-3">
        <div className="flex items-center gap-token-2 flex-1 min-w-[240px]">
          <Input placeholder="Search by Campaign" value={search} onChange={(event) => setSearch(event.target.value)} />
          <Button variant="primary" aria-label="Search">
            <SearchIcon />
          </Button>
        </div>
        <Select label="Ad Status" value={adStatus} options={['All', '1 Selected']} onChange={setAdStatus} />
        <Button variant="secondary">
          <FilterIcon /> Filters
        </Button>
        <Button variant="secondary">
          <ColumnsIcon /> Columns
        </Button>
        <Button variant="secondary">
          <DownloadIcon /> Download
        </Button>
        <Button variant="secondary">
          <ChartIcon /> Chart
        </Button>
      </div>

      <AdManagerTableScreen />
      <div className="bg-surface-default border border-surface-border rounded-token-lg shadow-resting">
        <Pagination page={page} totalPages={3} rangeStart={1} rangeEnd={5} totalResults={11} onPageChange={setPage} />
      </div>
    </div>
  );
}
