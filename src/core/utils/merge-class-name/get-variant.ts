import type { Variant } from '../../types';

export const getVariant = (variant: Variant, isDisabled?: boolean) => {
  if (variant === 'light' || isDisabled) {
    return ['light', 'default', 'default'];
  } else if (variant === 'plain') {
    return ['none', 'on', 'on'];
  } else if (variant === 'text') {
    return ['none', 'default', 'default'];
  } else if (variant === 'surface') {
    return ['on', 'default', 'default'];
  } else if (variant === 'solid') {
    return ['default', 'on', 'none'];
  }

  return ['none', 'none', 'none'];
};
