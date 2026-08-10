export interface BreadcrumbProps {
  section: string;
  page: string;
}

export function Breadcrumb({ section, page }: BreadcrumbProps) {
  return (
    <div className="flex items-center gap-token-2 font-sans">
      <span className="text-lg font-medium text-text-primary">{section}</span>
      <span className="text-text-secondary">›</span>
      <span className="text-sm text-text-secondary">{page}</span>
    </div>
  );
}
