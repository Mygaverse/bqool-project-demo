import { useState } from 'react';
import { StepNavigator, type Step } from './StepNavigator';
import { GoalStrategyScreen } from './GoalStrategyScreen';
import { AdFormatPickerScreen } from './AdFormatPickerScreen';
import { Button } from './Button';

const STEPS: Step[] = [
  { id: 'setup', label: '1. Goal Setup' },
  { id: 'strategy', label: '2. Goal Strategy' },
  { id: 'format', label: '3. Ad Format' },
  { id: 'products', label: '4. Products' },
  { id: 'creatives', label: '5. Creatives' },
  { id: 'preview', label: '6. Preview' },
  { id: 'competing', label: '7. Competing Campaign' },
  { id: 'launch', label: '8. Launch Goal' },
];

/**
 * Page Template: sticky StepNavigator (8 steps, matching the real product's
 * order — Ad Format is its own step, not nested under Goal Strategy) over
 * two populated sections (Goal Strategy, Ad Format). A representative slice
 * of the real single-scroll wizard, not the full Products/Creatives/Preview
 * flow.
 */
export function CampaignBuilderTemplate() {
  const [activeId, setActiveId] = useState('format');

  return (
    <div className="font-sans flex flex-col gap-token-6 p-token-6 bg-surface-subtle">
      <StepNavigator steps={STEPS} activeId={activeId} onStepClick={setActiveId} />

      <div className="bg-surface-default border border-surface-border rounded-token-lg shadow-resting p-token-6 flex flex-col gap-token-4">
        <div>
          <h2 className="text-text-primary" style={{ font: 'var(--typography-heading-md)' }}>
            Goal Strategy
          </h2>
        </div>
        <GoalStrategyScreen />
      </div>

      <div className="bg-surface-default border border-surface-border rounded-token-lg shadow-resting p-token-6 flex flex-col gap-token-4">
        <div>
          <h2 className="text-text-primary" style={{ font: 'var(--typography-heading-md)' }}>
            Ad Format
          </h2>
          <p className="mt-1 text-text-secondary" style={{ font: 'var(--typography-caption)' }}>
            Choose how this Sponsored Display ad presents your products.
          </p>
        </div>
        <AdFormatPickerScreen />
      </div>

      <div className="flex items-center justify-end gap-token-3 bg-surface-default border border-surface-border rounded-token-lg shadow-resting p-token-4">
        <Button variant="secondary">Cancel</Button>
        <Button variant="primary">Launch Goal</Button>
      </div>
    </div>
  );
}
