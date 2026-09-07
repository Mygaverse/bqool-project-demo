import clsx from 'clsx';

export interface DataStripProps {
  title: string;
  description: string;
  /** Override the default indigo accent title color/weight, e.g. for a plain-value display like "Deterministic". */
  titleClassName?: string;
  onClick?: () => void;
}

const STRIP_CLASS = 'w-full rounded-token-lg border border-surface-border bg-surface-default p-token-4';

/** Title + description row — the shared base for skill cards, status readouts, and report/description blocks. */
export function DataStrip({ title, description, titleClassName, onClick }: DataStripProps) {
  const content = (
    <>
      <span className={clsx('block font-bold text-ai-indigo-700', titleClassName)} style={{ font: 'var(--typography-body-sm)' }}>
        {title}
      </span>
      <span className="mt-1 block text-text-secondary" style={{ font: 'var(--typography-caption)' }}>
        {description}
      </span>
    </>
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={clsx(STRIP_CLASS, 'text-left transition-colors hover:border-ai-indigo-300')}
      >
        {content}
      </button>
    );
  }

  return <div className={STRIP_CLASS}>{content}</div>;
}
