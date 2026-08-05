import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Design System/Foundations',
};
export default meta;

type Story = StoryObj;

export const Typography: Story = {
  render: () => (
    <div className="font-sans space-y-token-4">
      <p className="text-text-primary" style={{ font: 'var(--typography-heading-lg)' }}>
        Heading LG — Campaign performance
      </p>
      <p className="text-text-primary" style={{ font: 'var(--typography-heading-md)' }}>
        Heading MD — Decision architecture
      </p>
      <p className="text-text-primary" style={{ font: 'var(--typography-body)' }}>
        Body — Sales, spend, ACoS, orders, and trend for the last 30 days.
      </p>
      <p className="text-text-secondary" style={{ font: 'var(--typography-caption)' }}>
        Caption — Updated 2 minutes ago
      </p>
    </div>
  ),
};

export const Elevation: Story = {
  render: () => (
    <div className="flex gap-token-8">
      <div className="shadow-resting bg-surface-default rounded-token-lg p-token-6 text-text-secondary">
        resting
      </div>
      <div className="shadow-raised bg-surface-default rounded-token-lg p-token-6 text-text-secondary">
        raised
      </div>
    </div>
  ),
};
