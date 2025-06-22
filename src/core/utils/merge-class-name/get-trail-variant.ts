import type { Variant } from '../../types';

export const getTrailVariant = (variant: Variant) => {
  if (variant === 'solid') {
    return 'default';
  }

  if (variant === 'light') {
    return 'light';
  }

  if (variant === 'surface') {
    return 'on';
  }

  return 'none';
};
