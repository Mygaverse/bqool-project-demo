import { useState } from 'react';
import { StepNavigator, type Step } from './StepNavigator';
import { AdFormatPickerScreen } from './AdFormatPickerScreen';

const STEPS: Step[] = [
  { id: 'setup', label: '1. Goal Setup' },
  { id: 'products', label: '2. Products' },
  { id: 'strategy', label: '3. Goal Strategy' },
  { id: 'preview', label: '4. Preview' },
  { id: 'competing', label: '5. Competing Campaign' },
  { id: 'launch', label: '6. Launch Goal' },
];

/**
 * Page Template: StepNavigator + one populated step (Ad Format, under Goal
 * Strategy for SD/SB) — a representative slice, not the full multi-section
 * wizard the real Campaign Builder has.
 */
export function CampaignBuilderTemplate() {
  const [activeId, setActiveId] = useState('strategy');

  return (
    <div className="font-sans flex flex-col gap-token-6 p-token-6 bg-surface-subtle">
      <StepNavigator steps={STEPS} activeId={activeId} onStepClick={setActiveId} />
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
    </div>
  );
}
