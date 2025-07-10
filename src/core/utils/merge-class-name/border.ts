import type { Variant, Border, DefaultBorder } from '../../types';

export const getBorder = (variant: Variant, border: Border) =>
  variant === 'outlined' && border === 'auto' ? 'set' : border;

export const isCheckboxBordered = (
  border: Border,
  bx: DefaultBorder,
  by: DefaultBorder,
  bt: DefaultBorder,
  bb: DefaultBorder,
  bl: DefaultBorder,
  br: DefaultBorder,
  variant?: Variant
) =>
  (variant === 'outlined' && border === 'auto') ||
  border === 'set' ||
  bx === 'set' ||
  by === 'set' ||
  bt === 'set' ||
  bb === 'set' ||
  bl === 'set' ||
  br === 'set';
