import clsx from 'clsx';

export interface DeliveryStatusProps {
  status: 'delivering' | 'pending' | 'not-delivering';
}

const LABEL: Record<DeliveryStatusProps['status'], string> = {
  delivering: 'Delivering',
  pending: 'Pending',
  'not-delivering': 'Not Delivering',
};

const CLASSES: Record<DeliveryStatusProps['status'], string> = {
  delivering: 'text-delivery-status-delivering',
  pending: 'text-delivery-status-pending',
  'not-delivering': 'text-delivery-status-not-delivering',
};

/** Plain colored text, no pill — the campaign table's Delivery Status column. */
export function DeliveryStatus({ status }: DeliveryStatusProps) {
  return <span className={clsx('text-sm font-medium', CLASSES[status])}>{LABEL[status]}</span>;
}
