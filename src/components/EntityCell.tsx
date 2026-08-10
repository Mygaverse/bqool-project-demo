import type { ReactNode } from 'react';

export interface EntityCellProps {
  title: string;
  badges?: ReactNode[];
  onClick?: () => void;
}

/** Name link plus a row of badges — the Campaign/Goal columns' shared shape. */
export function EntityCell({ title, badges = [], onClick }: EntityCellProps) {
  return (
    <div className="flex flex-col gap-1.5 font-sans">
      <span onClick={onClick} className="text-action-theme font-medium hover:underline cursor-pointer leading-tight">
        {title}
      </span>
      {badges.length > 0 && (
        <div className="flex items-center gap-1.5 flex-wrap">
          {badges.map((badge, index) => (
            <div key={index}>{badge}</div>
          ))}
        </div>
      )}
    </div>
  );
}
