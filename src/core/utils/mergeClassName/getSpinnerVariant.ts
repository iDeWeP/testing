import type { Variant } from '../../types';

export const getSpinnerVariant = (variant: Variant) => {
  if (variant === 'plain' || variant === 'solid') {
    return 'on';
  }

  if (variant === 'light' || variant === 'surface' || variant === 'text') {
    return 'default';
  }

  return 'none';
};
