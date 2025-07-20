import type { Border, Variant } from '../../types';

export const isBordered = (variant: Variant, border: Border) =>
  (variant === 'outlined' && border === 'auto') || border === 'set';
