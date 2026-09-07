import { DataHeader } from './DataHeader';

export interface ExecutionStage {
  id: string;
  label: string;
  status: 'completed' | 'active' | 'pending' | 'failed';
}

export interface AuditEvent {
  id: string;
  type: string;
  timestamp: string;
  summary: string;
}

export interface ExecutionHistoryTimelineProps {
  status: string;
  stages: ExecutionStage[];
  events: AuditEvent[];
}

const DOT: Record<ExecutionStage['status'], string> = {
  completed: 'bg-execution-stage-completed',
  failed: 'bg-execution-stage-failed',
  active: 'animate-pulse bg-execution-stage-active',
  pending: 'bg-execution-stage-pending',
};

/** BQool Insight's collapsible execution timeline — a 5-stage grid plus a nested "Audit events" disclosure. */
export function ExecutionHistoryTimeline({ status, stages, events }: ExecutionHistoryTimelineProps) {
  return (
    <details open className="rounded-token-lg border border-execution-history-card-border bg-execution-history-card-bg p-token-3">
      <summary className="cursor-pointer list-none">
        <DataHeader
          title="Execution History"
          size="eyebrow"
          className="text-execution-history-card-heading-fg"
          badge={
            <span className="rounded-token-full bg-execution-history-card-status-pill-bg px-token-2 py-1 text-[8px] font-bold uppercase text-execution-history-card-status-pill-fg ring-1 ring-execution-history-card-status-pill-ring">
              {status}
            </span>
          }
        />
      </summary>
      <ol className="mt-token-3 grid grid-cols-1 gap-token-2 sm:grid-cols-5">
        {stages.map((stage) => (
          <li key={stage.id} className="rounded-token-md border border-execution-history-card-border bg-surface-default p-token-2">
            <div className="flex items-center gap-1.5">
              <span className={`h-2 w-2 shrink-0 rounded-full ${DOT[stage.status]}`} />
              <span className="text-[8px] font-bold text-text-primary">{stage.label}</span>
            </div>
          </li>
        ))}
      </ol>
      <details className="mt-token-3 border-t border-execution-history-card-border pt-token-2 text-[10px] text-text-secondary">
        <summary className="cursor-pointer font-bold text-execution-history-card-status-pill-fg">Audit events ({events.length})</summary>
        <ol className="mt-token-2 space-y-token-2 border-l border-execution-history-card-border pl-token-3">
          {events.map((event) => (
            <li key={event.id} className="rounded-token-md border border-surface-border bg-surface-default p-token-2">
              <div className="flex flex-wrap items-center justify-between gap-token-2">
                <span className="rounded-token-full bg-ai-indigo-50 px-token-2 py-0.5 text-[8px] font-bold uppercase text-ai-indigo-700">
                  {event.type}
                </span>
                <time className="text-[8px] text-ai-slate-400">{event.timestamp}</time>
              </div>
              <p className="mt-1.5 text-[9px] leading-relaxed text-ai-slate-600">{event.summary}</p>
            </li>
          ))}
        </ol>
      </details>
    </details>
  );
}
