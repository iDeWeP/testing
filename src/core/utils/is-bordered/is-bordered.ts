import type { Variant, Border } from '../../types';

export const isBordered = (variant: Variant, border: Border) =>
  (variant === 'outlined' && border === 'auto') || border === 'set';
