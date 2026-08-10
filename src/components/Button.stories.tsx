import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Design System/Button',
  component: Button,
  args: { children: 'Save changes' },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: 'primary' } };
export const Secondary: Story = { args: { variant: 'secondary' } };
export const Disabled: Story = { args: { variant: 'primary', disabled: true } };
export const SecondaryDisabled: Story = { args: { variant: 'secondary', disabled: true } };
export const Icon: Story = {
  args: {
    variant: 'icon',
    'aria-label': 'Settings',
    children: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M9.05 1a1 1 0 0 1 .967.744L10.291 3.3a5.99 5.99 0 0 1 1.235.712l1.487-.545a1 1 0 0 1 1.216.44l.949 1.644a1 1 0 0 1-.23 1.298l-1.166 1.005a6.05 6.05 0 0 1 0 1.427l1.166 1.005a1 1 0 0 1 .23 1.298l-.949 1.644a1 1 0 0 1-1.216.44l-1.487-.545a5.99 5.99 0 0 1-1.235.712l-.274 1.556a1 1 0 0 1-.967.744H6.95a1 1 0 0 1-.967-.744L5.709 12.7a5.99 5.99 0 0 1-1.235-.712l-1.487.545a1 1 0 0 1-1.216-.44L.822 10.45a1 1 0 0 1 .23-1.298l1.166-1.005a6.05 6.05 0 0 1 0-1.427L1.052 5.715a1 1 0 0 1-.23-1.298l.949-1.644a1 1 0 0 1 1.216-.44l1.487.545A5.99 5.99 0 0 1 5.709 2.3L5.983 1.744A1 1 0 0 1 6.95 1h2.1ZM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
      </svg>
    ),
  },
};
