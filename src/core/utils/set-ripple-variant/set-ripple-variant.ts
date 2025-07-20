import type { Variant } from '../../types';

export const setRippleVariant = (variant: Variant) =>
  variant === 'light' ? 'light' : 'text';
