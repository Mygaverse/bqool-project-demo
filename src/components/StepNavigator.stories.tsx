import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { StepNavigator, type Step } from './StepNavigator';

const meta: Meta<typeof StepNavigator> = {
  title: 'Design System/Patterns/StepNavigator',
  component: StepNavigator,
};
export default meta;

type Story = StoryObj<typeof StepNavigator>;

const STEPS: Step[] = [
  { id: 'setup', label: '1. Goal Setup' },
  { id: 'products', label: '2. Products' },
  { id: 'strategy', label: '3. Goal Strategy' },
  { id: 'preview', label: '4. Preview' },
  { id: 'competing', label: '5. Competing Campaign' },
  { id: 'launch', label: '6. Launch Goal' },
];

export const Interactive: Story = {
  render: () => {
    function Demo() {
      const [activeId, setActiveId] = useState('strategy');
      return <StepNavigator steps={STEPS} activeId={activeId} onStepClick={setActiveId} />;
    }
    return <Demo />;
  },
};
