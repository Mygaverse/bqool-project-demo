import { useState } from 'react';
import { Card } from './Card';

interface Format {
  id: string;
  title: string;
  description: string;
}

const FORMATS: Format[] = [
  { id: 'image', title: 'Image', description: 'Showcase your product with a custom image.' },
  { id: 'video', title: 'Video', description: 'Use video to promote your brand and products.' },
  { id: 'collection', title: 'Product Collection', description: 'Feature a curated set of related products.' },
];

/** A Screen: interactive Card selection grid — the Ad Format picker under SD/SB strategies. */
export function AdFormatPickerScreen() {
  const [selectedId, setSelectedId] = useState('image');

  return (
    <div className="font-sans flex gap-token-4">
      {FORMATS.map((format) => (
        <Card
          key={format.id}
          selected={format.id === selectedId}
          className="w-48 cursor-pointer"
          onClick={() => setSelectedId(format.id)}
        >
          <h3 className="text-text-primary" style={{ font: 'var(--typography-heading-md)' }}>
            {format.title}
          </h3>
          <p className="mt-1 text-text-secondary" style={{ font: 'var(--typography-caption)' }}>
            {format.description}
          </p>
        </Card>
      ))}
    </div>
  );
}
