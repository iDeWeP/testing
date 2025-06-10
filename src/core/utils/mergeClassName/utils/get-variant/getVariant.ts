import type { Variant } from '../../../../types';

export const getVariant = (variant: Variant) => {
  if (variant === 'text') {
    return ['none', 'default'];
  } else if (variant === 'light') {
    return ['light', 'default'];
  } else if (variant === 'surface') {
    return ['on', 'default'];
  } else if (variant === 'solid') {
    return ['default', 'on'];
  }

  return ['none', 'none'];
};
