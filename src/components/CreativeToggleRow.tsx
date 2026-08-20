import { Toggle } from './Toggle';

export interface CreativeToggleRowProps {
  label: string;
  enabled: boolean;
  onToggle?: (enabled: boolean) => void;
  /** Shows the "<label> required" caption while enabled. */
  required?: boolean;
}

/** Toggle + label, expanding to an asset-picker row when on — the Campaign Builder Creatives section. */
export function CreativeToggleRow({ label, enabled, onToggle, required = false }: CreativeToggleRowProps) {
  return (
    <div className="flex flex-col gap-token-2 py-token-3 border-b border-surface-border last:border-b-0 font-sans">
      <div className="flex items-center gap-token-2">
        <Toggle checked={enabled} onChange={(value) => onToggle?.(value)} />
        <span className="text-sm font-semibold text-text-primary">{label}</span>
      </div>
      {enabled && (
        <div className="flex flex-wrap items-center gap-token-3">
          <button type="button" className="text-action-primary text-sm hover:underline">
            Select from Amazon assets
          </button>
          <span className="text-text-secondary text-sm">or</span>
          <button type="button" className="text-action-primary text-sm hover:underline">
            Upload {label}
          </button>
          <div className="relative h-12 w-16 border border-surface-border rounded-token-md bg-surface-default">
            <button
              type="button"
              aria-label={`Remove ${label}`}
              className="absolute -top-1.5 -right-1.5 h-4 w-4 rounded-token-full bg-surface-default border border-surface-border text-text-secondary text-[10px] flex items-center justify-center leading-none"
            >
              ×
            </button>
          </div>
        </div>
      )}
      {enabled && required && <span className="text-xs text-feedback-danger">⚠ {label} required</span>}
    </div>
  );
}
