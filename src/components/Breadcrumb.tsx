export interface BreadcrumbProps {
  /** First item renders large/bold, middle items as links, last item as the current page. */
  items: string[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-token-2 font-sans flex-wrap">
      {items.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === items.length - 1;
        return (
          <span key={item} className="flex items-center gap-token-2">
            {index > 0 && <span className="text-text-secondary">›</span>}
            <span
              className={
                isFirst
                  ? 'text-lg font-medium text-text-primary'
                  : isLast
                    ? 'text-sm text-text-secondary'
                    : 'text-sm text-action-theme hover:underline cursor-pointer'
              }
            >
              {item}
            </span>
          </span>
        );
      })}
    </div>
  );
}
