import { useState } from 'react';
import { StrategyCard } from './StrategyCard';

const TargetIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path
      d="M10 8h12v4a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <path d="M10 9H6a2 2 0 0 0 2 4M22 9h4a2 2 0 0 1-2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 18v4M12 26h8l-1-4h-6l-1 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

const SearchIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="1.5" />
    <path d="m20 20 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const CustomIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="6" y="8" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="m13 12 6 3-6 3v-6Z" fill="currentColor" />
    <path d="M12 26h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const STRATEGIES = [
  {
    id: 'remarketing',
    icon: <TargetIcon />,
    title: 'Remarketing',
    description:
      'Reach shoppers who interacted with your products and those familiar with the category to encourage them to complete their purchase.',
    bestFor: [
      'Sellers wanting to recover high-intent shoppers.',
      'Products with good traffic but low conversion.',
      'Promotions or product launches needing retargeting.',
    ],
  },
  {
    id: 'conquer-defend',
    icon: <TrophyIcon />,
    title: 'Conquer & Defend',
    description:
      'Reach shoppers browsing competitors or related categories, protect your brand visibility from rival ads, and expand into competitor audiences to capture more demand.',
    bestFor: [
      'Sellers entering competitive categories.',
      'Brands wanting to capture competitor traffic.',
      'Products needing higher visibility beside top competitors.',
    ],
  },
  {
    id: 'discover',
    icon: <SearchIcon />,
    title: 'Discover New Audiences',
    description:
      'Reach new people using In-Market, Lifestyle, and Interest targeting, showcase your products beyond your main category, and uncover new growth opportunities.',
    bestFor: [
      'Sellers wanting to discover new customer groups.',
      'Products suitable for broader audiences (interest/lifestyle).',
      'Brands looking to scale beyond current category traffic.',
    ],
  },
  {
    id: 'custom',
    icon: <CustomIcon />,
    title: 'Custom',
    description: 'Sellers has own strategy and wants to build one campaign and not follow Bqool campaign structure.',
    bestFor: [
      'Experienced advertisers that have very specific, sophisticated strategies but can also be complementary to any existing multi-campaign goals you’re running.',
    ],
  },
];

/** A Screen: the Goal Strategy step's 4-option StrategyCard picker. */
export function GoalStrategyScreen() {
  const [selectedId, setSelectedId] = useState('remarketing');

  return (
    <div className="font-sans flex flex-wrap gap-token-4">
      {STRATEGIES.map((strategy) => (
        <StrategyCard
          key={strategy.id}
          icon={strategy.icon}
          title={strategy.title}
          description={strategy.description}
          bestFor={strategy.bestFor}
          selected={strategy.id === selectedId}
          onClick={() => setSelectedId(strategy.id)}
        />
      ))}
    </div>
  );
}
