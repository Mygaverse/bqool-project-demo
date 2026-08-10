import clsx from 'clsx';

export interface Step {
  id: string;
  label: string;
}

export interface StepNavigatorProps {
  steps: Step[];
  activeId: string;
  onStepClick?: (id: string) => void;
}

/** Sticky numbered-step bar — Campaign Builder's step progress. */
export function StepNavigator({ steps, activeId, onStepClick }: StepNavigatorProps) {
  const activeIndex = steps.findIndex((step) => step.id === activeId);

  return (
    <nav className="bg-action-primary rounded-token-lg shadow-raised px-token-4 py-token-3 font-sans">
      <div className="flex items-center gap-token-4 overflow-x-auto">
        {steps.map((step, index) => {
          const isActive = step.id === activeId;
          const isDone = index < activeIndex;
          return (
            <div key={step.id} className="flex items-center gap-token-4 shrink-0">
              <button
                type="button"
                onClick={() => onStepClick?.(step.id)}
                className="flex items-center gap-token-2 whitespace-nowrap"
              >
                <span
                  className={clsx(
                    'flex items-center justify-center h-7 w-7 rounded-token-full text-xs font-semibold shrink-0',
                    isActive || isDone ? 'bg-text-inverse text-action-primary' : 'bg-white/20 text-text-inverse',
                  )}
                >
                  {index + 1}
                </span>
                <span className={clsx('text-sm text-text-inverse', isActive ? 'font-semibold' : 'font-medium opacity-80')}>
                  {step.label}
                </span>
              </button>
              {index < steps.length - 1 && <span className="text-text-inverse opacity-50">›</span>}
            </div>
          );
        })}
      </div>
    </nav>
  );
}
