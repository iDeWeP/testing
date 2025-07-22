import type { Variant } from '../../types';

export const hasVariantBg = (variant: Variant): boolean =>
  variant === 'light' || variant === 'solid';
