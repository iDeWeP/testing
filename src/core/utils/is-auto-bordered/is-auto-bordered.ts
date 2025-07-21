import type { Variant, Border } from '../../types';

export const isAutoBordered = (variant: Variant, border: Border) =>
  (variant === 'outlined' && border === 'auto') || border === 'set';
