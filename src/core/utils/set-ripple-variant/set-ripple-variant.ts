import type { Variant } from '../../types';

export const setRippleVariant = (variant: Variant): 'light' | 'text' =>
  variant === 'light' ? 'light' : 'text';
