import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from './Button';

const meta: Meta<typeof Card> = {
  title: 'Design System/Card',
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="max-w-sm font-sans">
      <h3 className="text-text-primary" style={{ font: 'var(--typography-heading-md)' }}>
        Campaign performance
      </h3>
      <p className="mt-1 text-text-secondary" style={{ font: 'var(--typography-caption)' }}>
        Sales, spend, ACoS, orders, and trend for the last 30 days.
      </p>
      <div className="mt-4">
        <Button>View details</Button>
      </div>
    </Card>
  ),
};

export const SelectableOption: Story = {
  render: () => (
    <div className="flex gap-token-4 font-sans">
      <Card selected className="w-48">
        <h3 className="text-text-primary" style={{ font: 'var(--typography-heading-md)' }}>
          Image
        </h3>
        <p className="mt-1 text-text-secondary" style={{ font: 'var(--typography-caption)' }}>
          Showcase your product with a custom image.
        </p>
      </Card>
      <Card className="w-48">
        <h3 className="text-text-primary" style={{ font: 'var(--typography-heading-md)' }}>
          Video
        </h3>
        <p className="mt-1 text-text-secondary" style={{ font: 'var(--typography-caption)' }}>
          Use video to promote your brand and products.
        </p>
      </Card>
    </div>
  ),
};
