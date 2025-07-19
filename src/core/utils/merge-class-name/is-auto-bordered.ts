import type { Border, DefaultBorder, Variant } from '../../types';

export const isAutoBordered = (
  border: Border,
  b: DefaultBorder,
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
  b === 'set' ||
  bx === 'set' ||
  by === 'set' ||
  bt === 'set' ||
  bb === 'set' ||
  bl === 'set' ||
  br === 'set';
