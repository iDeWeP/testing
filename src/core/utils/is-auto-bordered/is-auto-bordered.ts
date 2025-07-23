import type { Variant, Border } from '../../types';

export const isAutoBordered = (
  variant: Variant,
  border: Border,
  isChecked?: boolean
): boolean =>
  (isChecked === false && variant === 'solid' && border === 'auto') ||
  (variant === 'outlined' && border === 'auto') ||
  border === 'set';
