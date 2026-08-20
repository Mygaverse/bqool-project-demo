import clsx from 'clsx';

export interface DeliveryStatusProps {
  status: 'delivering' | 'limited' | 'not-delivering';
}

const LABEL: Record<DeliveryStatusProps['status'], string> = {
  delivering: 'Delivering',
  limited: 'Limited Delivering',
  'not-delivering': 'Not Delivering',
};

const CLASSES: Record<DeliveryStatusProps['status'], string> = {
  delivering: 'text-delivery-status-delivering',
  limited: 'text-delivery-status-limited',
  'not-delivering': 'text-delivery-status-not-delivering',
};

/** Plain colored text, no pill — the campaign table's Delivery Status column. */
export function DeliveryStatus({ status }: DeliveryStatusProps) {
  return <span className={clsx('text-sm font-medium', CLASSES[status])}>{LABEL[status]}</span>;
}
