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

/** Simplified from the real dashboard-next/components/ui/LogoPilot.tsx (drops the blur filter, kept crisp at icon size). */
const LogoPilotIcon = () => (
  <svg width="20" height="20" viewBox="0 0 173 172" fill="none">
    <defs>
      <linearGradient id="logoPilotGradient" x1="172.317" y1="-6.265" x2="43.216" y2="172.171" gradientUnits="userSpaceOnUse">
        <stop offset="0.16" stopColor="#182987" />
        <stop offset="1" stopColor="#036eb7" />
      </linearGradient>
    </defs>
    <circle cx="86" cy="86" r="82" fill="url(#logoPilotGradient)" />
    <path
      d="M87.7348 55.9237C83.4482 55.9237 79.6378 56.3997 76.5419 57.8279V40.452H49.6314V92.8177C49.6314 93.2938 49.6314 93.2938 49.6314 93.2938C49.6314 114.002 66.5398 130.902 87.2585 130.902C89.64 130.902 92.0214 130.426 94.4029 130.426C111.788 127.331 125.362 111.622 125.362 93.2938C125.124 72.8235 108.215 55.9237 87.7348 55.9237ZM87.7348 105.195C81.0667 105.195 76.0656 99.9585 76.0656 93.5318C76.0656 86.8671 81.3048 81.8685 87.7348 81.8685C94.4029 81.8685 99.4039 87.1051 99.4039 93.5318C99.4039 99.9585 94.1647 105.195 87.7348 105.195Z"
      fill="#fff"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const ExpandIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
    <path d="M9 1h4v4M13 1 8 6M5 13H1V9M1 13l5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="2" stroke="currentColor" strokeWidth="1.3" />
    <path d="M7 1v1.4M7 11.6V13M13 7h-1.4M2.4 7H1M11.2 2.8l-1 1M3.8 10.2l-1 1M11.2 11.2l-1-1M3.8 3.8l-1-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const HistoryIcon = () => (
  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M7 4v3.3L9.2 8.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const NewChatIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
    <path d="M7 3v8M3 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const StarsIcon = () => (
  <svg width="11" height="11" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1.5 9.2 5.8 13.5 7 9.2 8.2 8 12.5 6.8 8.2 2.5 7 6.8 5.8 8 1.5Z" />
  </svg>
);

/**
 * Template: Option A — BQool Pilot's default/idle panel, a bottom-right-corner
 * popup in the real product. Two-row header verified against BQoolPilotWidget.tsx:
 * a gradient title bar (logo, title, AI mode, close), and a separate "session bar"
 * row (the BQool Insight gradient link + a grouped Settings/History/New Chat
 * segment control + an expand toggle) — not the single plain header this template
 * started with, which undersold the real header treatment.
 */
export function BQoolPilotTemplate() {
  const [historyCount] = useState(3);

  return (
    <div className="font-sans flex h-[600px] w-[380px] flex-col overflow-hidden rounded-token-lg border border-surface-border bg-surface-default shadow-raised">
      <div className="flex shrink-0 items-center justify-between gap-token-2 bg-pilot-header px-token-4 py-token-3 text-text-inverse">
        <div className="flex min-w-0 items-center gap-token-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-token-full border border-white/20 bg-white/10 p-1">
            <LogoPilotIcon />
          </div>
          <h3 className="truncate text-sm font-bold leading-tight">BQool Pilot 3.0</h3>
          <AIModeBadge mode="live" inverted />
        </div>
        <button type="button" aria-label="Close" className="shrink-0 rounded-token-md p-1 hover:bg-white/10">
          <CloseIcon />
        </button>
      </div>

      <div className="flex shrink-0 items-center justify-between gap-token-2 border-b border-surface-border bg-surface-subtle px-token-4 py-token-2">
        <button
          type="button"
          className="relative flex items-center gap-1.5 overflow-hidden rounded-token-md border border-insight-nav-pill-border px-token-3 py-1.5 text-[11px] font-bold text-text-inverse"
        >
          <span className="absolute inset-0 bg-insight-nav-pill" aria-hidden="true" />
          <span className="absolute inset-0 animate-border-flow bg-insight-nav-pill-shimmer bg-[length:200%_100%]" aria-hidden="true" />
          <span className="relative z-10 flex items-center text-ai-indigo-100">
            <StarsIcon />
          </span>
          <span className="relative z-10 whitespace-nowrap">BQool Insight</span>
        </button>

        <div className="flex shrink-0 items-center gap-token-2">
          <div className="flex items-center gap-1 rounded-token-md border border-surface-border bg-surface-secondary p-0.5">
            <button type="button" className="flex items-center gap-1 rounded-token-sm px-token-2 py-1 text-[11px] font-bold text-text-secondary hover:text-ai-indigo-700">
              <SettingsIcon />
              <span>Settings</span>
            </button>
            <div className="h-3.5 w-px bg-surface-border" />
            <button type="button" className="flex items-center gap-1 rounded-token-sm px-token-2 py-1 text-[11px] font-bold text-text-secondary hover:text-ai-indigo-700">
              <HistoryIcon />
              <span>History {historyCount > 0 ? `(${historyCount})` : ''}</span>
            </button>
            <div className="h-3.5 w-px bg-surface-border" />
            <button type="button" aria-label="New chat" className="rounded-token-sm p-1 text-text-secondary hover:text-ai-indigo-700">
              <NewChatIcon />
            </button>
          </div>
          <button
            type="button"
            aria-label="Expand Pilot panel"
            className="flex h-7 w-7 items-center justify-center rounded-token-md border border-surface-border text-text-secondary hover:border-ai-indigo-200 hover:text-ai-indigo-600"
          >
            <ExpandIcon />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-token-4">
        <PilotIntroCard skills={DEFAULT_SKILLS} />
      </div>

      <div className="shrink-0 border-t border-surface-border p-token-3">
        <ChatComposer />
      </div>
    </div>
  );
}
