import type { Variant } from '../../types';

export const setVariant = (variant: Variant) =>
  variant === 'solid' || variant === 'plain'
    ? 'plain'
    : variant === 'none'
    ? 'none'
    : 'text';
