import { AIModeBadge } from './AIModeBadge';
import { DataHeader } from './DataHeader';
import { ExecutiveSummaryCard } from './ExecutiveSummaryCard';
import { ExecutionHistoryTimeline } from './ExecutionHistoryTimeline';
import { ScopeCard } from './ScopeCard';
import { KpiCard } from './KpiCard';
import { FindingCard } from './FindingCard';
import { RecommendationCard } from './RecommendationCard';
import { GenerateReportPanel } from './GenerateReportPanel';
import { StatusCard } from './StatusCard';

const JournalIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="3" y="2.5" width="12" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
    <path d="M6.5 2.5v13" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const ClockIcon = () => (
  <svg width="11" height="11" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" />
    <path d="M7 4v3.3L9.2 8.7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
    <path d="M7 1.5 12 3.3v3.4c0 3-2.1 5.2-5 6.1-2.9-.9-5-3.1-5-6.1V3.3L7 1.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
    <path d="M4.8 7 6.3 8.5 9.2 5.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 3.5 5 6.5 8 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

function InventoryItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-token-lg bg-surface-default px-token-3 py-token-2 text-center ring-1 ring-ai-slate-200">
      <p className="text-base font-extrabold text-ai-slate-900">{value}</p>
      <p className="text-[8px] font-bold uppercase tracking-wide text-ai-slate-400">{label}</p>
    </div>
  );
}

const STAGES = [
  { id: 'understand', label: 'Understand request', status: 'completed' as const },
  { id: 'prepare', label: 'Prepare task plan', status: 'completed' as const },
  { id: 'retrieve', label: 'Retrieve evidence', status: 'completed' as const },
  { id: 'analyze', label: 'Analyze findings', status: 'completed' as const },
  { id: 'respond', label: 'Prepare response', status: 'completed' as const },
];

const EVENTS = [
  { id: 'e1', type: 'task started', timestamp: 'Sep 3, 9:14 AM', summary: 'Started campaign performance audit for the last 14 days.' },
  { id: 'e2', type: 'evidence gathered', timestamp: 'Sep 3, 9:14 AM', summary: 'Pulled 14 days of campaign, ad group, and search-term stats.' },
  { id: 'e3', type: 'synthesis complete', timestamp: 'Sep 3, 9:15 AM', summary: 'Ranked 3 findings and 2 recommendations from grounded evidence.' },
];

const FINDINGS = [
  {
    rank: 1,
    title: 'ACOS rose 18% week-over-week',
    tags: ['Review', 'High priority', 'Evidence review'],
    severity: 'critical' as const,
    metrics: [
      { label: 'ACOS', value: '38.66%' },
      { label: 'ROAS', value: '2.59x' },
      { label: 'Spend', value: '$44.06' },
      { label: 'Sales', value: '$113.97' },
    ],
    detail: 'Sponsored Products ACOS climbed from 24.1% to 28.4%, driven by two campaigns with rising CPCs.',
    agent: 'Performance Analyzer · Campaign audit',
    evidenceCount: 1,
    onReviewEvidence: () => {},
  },
  {
    rank: 2,
    title: '$212 spent on non-converting search terms',
    severity: 'warning' as const,
    detail: '14 search terms with 0 conversions accounted for 12% of Sponsored Products spend.',
    agent: 'Keyword Opportunity Finder · Search-term waste',
  },
];

const RECOMMENDATIONS = [
  {
    index: 1,
    kindLabel: 'Budget',
    priorityLabel: 'High',
    readinessLabel: 'Ready to simulate',
    readinessTone: 'positive' as const,
    action: 'Reduce budget on 2 underperforming campaigns',
    rationale: 'Reallocating $150/day from underperforming campaigns to top performers is projected to lower blended ACOS by ~3 points.',
    description: 'Simulation only — no live changes until you approve.',
    actionLabel: 'Approve & simulate',
  },
  {
    index: 2,
    kindLabel: 'Search terms',
    priorityLabel: 'Medium',
    readinessLabel: 'Needs review',
    readinessTone: 'warning' as const,
    action: 'Pause 14 non-converting search terms',
    rationale: 'These terms have spent $212 combined with zero conversions over the last 14 days.',
    description: 'Review the term list before pausing — some may be early-stage brand terms.',
    actionLabel: 'Review terms',
  },
];

/**
 * Template: Option B — the full BQool Insight page (expanded panel mode),
 * covering Executive Summary through Generate Report. The Figma-synced
 * reference screenshot only captured the above-the-fold portion (summary,
 * execution history, metadata); everything below is verified directly
 * against ModernInsightOverview.tsx rather than the screenshot.
 */
export function BQoolInsightTemplate() {
  return (
    <div className="font-sans flex min-h-screen w-full flex-col gap-token-4 bg-ai-insight-panel p-token-5 text-text-inverse">
      <header className="border-b border-white/10 pb-token-3">
        <DataHeader
          icon={
            <div className="rounded-token-lg border border-ai-insight-panel-header-icon-border bg-ai-insight-panel-header-icon-bg p-token-2">
              <JournalIcon />
            </div>
          }
          title="BQool Insight"
          subtitle="Grounded session intelligence, evidence, actions, and reports"
          badge={
            <div className="flex items-center gap-token-2">
              <AIModeBadge mode="live" inverted />
              <a
                href="#insight-execution-history"
                className="flex items-center gap-1.5 rounded-token-full border border-ai-indigo-400 bg-execution-history-link px-token-3 py-1.5 text-[10px] font-bold text-text-inverse shadow-resting transition-colors hover:bg-execution-history-link-hover"
              >
                <ClockIcon />
                Execution History
              </a>
              <button
                type="button"
                aria-haspopup="listbox"
                className="flex items-center gap-1.5 rounded-token-md border border-white/15 bg-white/10 px-token-3 py-1.5 text-[10px] font-bold text-text-inverse hover:bg-white/15"
              >
                <ClockIcon />
                <span className="max-w-40 truncate">Find wasteful search...</span>
                <ChevronDownIcon />
              </button>
            </div>
          }
          size="sm"
          inverted
        />
      </header>

      <div className="flex flex-col gap-token-4 rounded-token-lg border border-ai-indigo-100 bg-white/95 p-token-4 text-text-primary">
        <ExecutiveSummaryCard
          tone="warning"
          headline="ACOS is trending up across Sponsored Products"
          takeaway="ACOS rose from 24.1% to 28.4% over the last 14 days, concentrated in 2 campaigns. Non-converting search terms account for $212 of avoidable spend."
          confidence="high"
        />

        <ExecutionHistoryTimeline status="completed" stages={STAGES} events={EVENTS} />

        <section className="grid grid-cols-2 gap-token-2 lg:grid-cols-5">
          <ScopeCard label="Scope" value="Sponsored Products" />
          <ScopeCard label="Period" value="Last 14 days" />
          <ScopeCard label="Coverage" value="Complete" />
          <ScopeCard label="Freshness" value="Fresh" />
          <ScopeCard label="Source" value="Amazon Ads API" />
        </section>

        <section>
          <DataHeader
            title="KPI Snapshot"
            size="eyebrow"
            className="text-ai-slate-500"
            badge={<span className="text-[9px] font-semibold text-ai-slate-400">10 grounded evidence records</span>}
          />
          <div className="mt-token-2 grid grid-cols-2 gap-token-2 lg:grid-cols-3">
            <KpiCard label="ACOS" value="28.4%" />
            <KpiCard label="Ad Spend" value="$1,704.35" />
            <KpiCard label="Ad Sales" value="$6,512.20" />
          </div>
        </section>

        <section>
          <DataHeader
            title="Ranked Findings"
            size="eyebrow"
            className="text-ai-slate-500"
            badge={<span className="text-[9px] font-semibold text-ai-slate-400">Ranked by business severity</span>}
          />
          <div className="mt-token-2 flex flex-col gap-token-2">
            {FINDINGS.map((finding) => (
              <FindingCard key={finding.rank} {...finding} />
            ))}
          </div>
        </section>

        <section className="rounded-token-lg border border-recommendation-card-border bg-recommendation-card-bg p-token-3">
          <DataHeader
            title="Recommended Next Steps"
            size="eyebrow"
            className="text-recommendation-card-heading-fg"
            badge={<span className="text-[9px] font-semibold text-ai-blue-500">Live action-plan status</span>}
          />
          <div className="mt-token-2 flex flex-col gap-token-2">
            {RECOMMENDATIONS.map((recommendation) => (
              <RecommendationCard key={recommendation.index} {...recommendation} />
            ))}
          </div>
        </section>

        <GenerateReportPanel />

        <section className="grid grid-cols-1 gap-token-2 sm:grid-cols-3">
          <StatusCard label="Provider" value="Deterministic" detail="degraded" />
          <StatusCard label="Execution" value="Completed" detail="10 evidence · 3 findings" />
          <StatusCard label="Confidence" value="Low Evidence Confidence" detail="At least one cited data source is stale." />
        </section>

        <section className="rounded-token-lg bg-ai-slate-50 p-token-3">
          <DataHeader icon={<ShieldIcon />} title="Structured Report Inventory" size="eyebrow" className="text-ai-indigo-700" />
          <div className="mt-token-3 grid grid-cols-2 gap-token-2 sm:grid-cols-4">
            <InventoryItem label="Findings" value={FINDINGS.length} />
            <InventoryItem label="Recommendations" value={RECOMMENDATIONS.length} />
            <InventoryItem label="Action plans" value={1} />
            <InventoryItem label="Artifacts" value={0} />
          </div>
        </section>
      </div>
    </div>
  );
}
