import type { Variant } from '../../types';

export const hasVariantBg = (variant: Variant) =>
  variant === 'light' || variant === 'solid';

export const setRippleVariant = (variant: Variant) =>
  variant === 'light' ? 'light' : 'text';
