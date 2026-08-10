import { StatusPill } from './StatusPill';

export interface AIStatusCellProps {
  status: 'enabled' | 'paused' | 'pending';
  caption: string;
  onToggle?: () => void;
  onCaptionClick?: () => void;
}

/**
 * StatusPill plus a small caption link (e.g. "2/2 Ad Groups") — the
 * AI-Bidding/AI-Harvesting columns. Consolidates what the real product
 * hand-rolls separately in each of those columns into one shared pattern.
 */
export function AIStatusCell({ status, caption, onToggle, onCaptionClick }: AIStatusCellProps) {
  return (
    <div className="flex flex-col gap-1 font-sans">
      <StatusPill status={status} onToggle={onToggle} />
      <button
        type="button"
        onClick={onCaptionClick}
        className="text-action-primary text-xs hover:underline text-left w-fit"
      >
        {caption}
      </button>
    </div>
  );
}
