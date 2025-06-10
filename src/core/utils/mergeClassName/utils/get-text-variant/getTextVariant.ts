import type { Variant } from '../../../../types';

export const getTextVariant = (variant: Variant) => {
  if (variant === 'none') {
    return 'none';
  } else if (variant === 'solid') {
    return 'on';
  }

  return 'default';
};
