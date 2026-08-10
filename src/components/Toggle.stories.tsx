import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Design System/Components/Toggle',
  component: Toggle,
};
export default meta;

type Story = StoryObj<typeof Toggle>;

function Interactive({ initial }: { initial: boolean }) {
  const [checked, setChecked] = useState(initial);
  return <Toggle checked={checked} onChange={setChecked} />;
}

export const On: Story = { render: () => <Interactive initial /> };
export const Off: Story = { render: () => <Interactive initial={false} /> };
export const Disabled: Story = { args: { checked: true, disabled: true, onChange: () => {} } };
