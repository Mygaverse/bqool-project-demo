export interface PaginationProps {
  page: number;
  totalPages: number;
  rangeStart: number;
  rangeEnd: number;
  totalResults: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ page, totalPages, rangeStart, rangeEnd, totalResults, onPageChange }: PaginationProps) {
  return (
    <div className="flex items-center justify-between font-sans text-sm text-text-secondary px-token-4 py-token-3">
      <span>
        {rangeStart}-{rangeEnd} of {totalResults} Results
      </span>
      <div className="flex items-center gap-token-3">
        <span>
          Page {page} of {totalPages}
        </span>
        <div className="flex items-center gap-token-1">
          <button
            type="button"
            disabled={page <= 1}
            onClick={() => onPageChange(page - 1)}
            className="px-token-2 py-1 rounded-token-md border border-surface-border disabled:opacity-40 hover:bg-surface-selected"
          >
            ‹
          </button>
          <button
            type="button"
            disabled={page >= totalPages}
            onClick={() => onPageChange(page + 1)}
            className="px-token-2 py-1 rounded-token-md border border-surface-border disabled:opacity-40 hover:bg-surface-selected"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
}
