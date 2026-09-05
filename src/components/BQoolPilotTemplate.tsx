import { useState } from 'react';
import { AIModeBadge } from './AIModeBadge';
import { PilotIntroCard } from './PilotIntroCard';
import { ChatComposer } from './ChatComposer';

const DEFAULT_SKILLS = [
  { skillId: 'performance-analyzer', label: 'Campaign audit', prompt: 'Audit my campaign performance for the last 14 days.' },
  { skillId: 'trend-analyzer', label: 'Period comparison', prompt: 'Compare my campaign performance over the last 14 days and explain what changed.' },
  { skillId: 'keyword-opportunity-finder', label: 'Search-term waste', prompt: 'Find wasteful search terms for the last 14 days.' },
  { skillId: 'budget-opportunity-analyzer', label: 'Budget opportunities', prompt: 'Find budget optimization opportunities for the last 14 days.' },
];

const SettingsIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.3" />
    <path d="M7 1v1.4M7 11.6V13M13 7h-1.4M2.4 7H1M11.2 2.8l-1 1M3.8 10.2l-1 1M11.2 11.2l-1-1M3.8 3.8l-1-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const HistoryIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M7 4v3.3L9.2 8.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NewChatIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

/**
 * Template: Option A — BQool Pilot's default/idle panel, a bottom-right-corner
 * popup in the real product. Chat-first: header (title, AI mode, the "BQool
 * Insight" gradient link, Settings/History/New Chat), the "Start with a skill"
 * intro card, and the composer — verified against BQoolPilotWidget.tsx and
 * quickSkills.ts rather than the Figma-synced reference screenshot alone.
 */
export function BQoolPilotTemplate() {
  const [historyCount] = useState(3);

  return (
    <div className="font-sans flex h-[600px] w-[380px] flex-col overflow-hidden rounded-token-lg border border-surface-border bg-surface-default shadow-raised">
      <header className="flex shrink-0 items-center gap-token-2 border-b border-surface-border px-token-4 py-token-3">
        <h3 className="flex-1 text-sm font-bold text-text-primary">BQool Pilot 3.0</h3>
        <AIModeBadge mode="live" />
        <button
          type="button"
          className="rounded-token-full bg-gradient-to-r from-ai-indigo-600 via-ai-violet-500 to-ai-blue-500 px-token-3 py-1 text-[10px] font-bold text-text-inverse"
        >
          BQool Insight
        </button>
        <button type="button" aria-label="Settings" className="rounded-token-md p-1.5 text-text-secondary hover:bg-surface-subtle">
          <SettingsIcon />
        </button>
        <button type="button" aria-label={`History (${historyCount})`} className="rounded-token-md p-1.5 text-text-secondary hover:bg-surface-subtle">
          <HistoryIcon />
        </button>
        <button type="button" aria-label="New chat" className="rounded-token-md p-1.5 text-text-secondary hover:bg-surface-subtle">
          <NewChatIcon />
        </button>
      </header>

      <div className="flex-1 overflow-y-auto p-token-4">
        <PilotIntroCard skills={DEFAULT_SKILLS} />
      </div>

      <div className="shrink-0 border-t border-surface-border p-token-3">
        <ChatComposer />
      </div>
    </div>
  );
}
