import { AIModeBadge } from './AIModeBadge';
import { DataHeader } from './DataHeader';
import { ExecutiveSummaryCard } from './ExecutiveSummaryCard';
import { ExecutionHistoryTimeline } from './ExecutionHistoryTimeline';
import { ScopeCard } from './ScopeCard';
import { KpiCard } from './KpiCard';
import { FindingCard } from './FindingCard';
import { RecommendationCard } from './RecommendationCard';
import { GenerateReportPanel } from './GenerateReportPanel';

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

const STAGES = [
  { id: 'plan', label: 'Plan', status: 'completed' as const },
  { id: 'gather', label: 'Gather evidence', status: 'completed' as const },
  { id: 'analyze', label: 'Analyze', status: 'completed' as const },
  { id: 'synthesize', label: 'Synthesize', status: 'completed' as const },
  { id: 'report', label: 'Report', status: 'completed' as const },
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
    severity: 'critical' as const,
    detail: 'Sponsored Products ACOS climbed from 24.1% to 28.4%, driven by two campaigns with rising CPCs.',
    agent: 'Performance Analyzer · Campaign audit',
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
          <h3 className="mb-token-2 text-[10px] font-extrabold uppercase tracking-wide text-ai-slate-500">KPI Snapshot</h3>
          <div className="grid grid-cols-2 gap-token-2 lg:grid-cols-3">
            <KpiCard label="ACOS" value="28.4%" />
            <KpiCard label="Ad Spend" value="$1,704.35" />
            <KpiCard label="Ad Sales" value="$6,512.20" />
          </div>
        </section>

        <section>
          <h3 className="mb-token-2 text-[10px] font-extrabold uppercase tracking-wide text-ai-slate-500">Ranked Findings</h3>
          <div className="flex flex-col gap-token-2">
            {FINDINGS.map((finding) => (
              <FindingCard key={finding.rank} {...finding} />
            ))}
          </div>
        </section>

        <section className="rounded-token-lg border border-recommendation-card-border bg-recommendation-card-bg p-token-3">
          <h3 className="text-[10px] font-extrabold uppercase tracking-wide text-recommendation-card-heading-fg">Recommended Next Steps</h3>
          <div className="mt-token-2 flex flex-col gap-token-2">
            {RECOMMENDATIONS.map((recommendation) => (
              <RecommendationCard key={recommendation.index} {...recommendation} />
            ))}
          </div>
        </section>

        <GenerateReportPanel />
      </div>
    </div>
  );
}
