export interface GenerateReportPanelProps {
  onGenerateMarkdown?: () => void;
  onGeneratePdf?: () => void;
}

/** BQool Insight's report-download footer — Markdown (outline) and PDF (solid) actions. */
export function GenerateReportPanel({ onGenerateMarkdown, onGeneratePdf }: GenerateReportPanelProps) {
  return (
    <section className="rounded-token-lg border border-generate-report-panel-border bg-generate-report-panel-bg p-token-3">
      <div className="flex flex-wrap items-center justify-between gap-token-2">
        <div>
          <h3 className="text-[10px] font-extrabold uppercase tracking-wide text-generate-report-panel-heading-fg">Generate Report</h3>
          <p className="mt-1 text-[9px] text-generate-report-panel-description-fg">Download this grounded Insight session for review or sharing.</p>
        </div>
        <div className="flex gap-token-2">
          <button
            type="button"
            onClick={onGenerateMarkdown}
            className="inline-flex items-center gap-1.5 rounded-token-md border border-generate-report-panel-outline-border bg-surface-default px-token-3 py-1.5 text-[9px] font-bold text-generate-report-panel-outline-fg hover:bg-ai-indigo-50"
          >
            Markdown
          </button>
          <button
            type="button"
            onClick={onGeneratePdf}
            className="inline-flex items-center gap-1.5 rounded-token-md bg-generate-report-panel-solid-bg px-token-3 py-1.5 text-[9px] font-bold text-text-inverse hover:bg-generate-report-panel-solid-bg-hover"
          >
            PDF
          </button>
        </div>
      </div>
    </section>
  );
}
