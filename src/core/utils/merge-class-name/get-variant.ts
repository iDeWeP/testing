import type { Variant } from '../../types';

export const getVariant = (variant: Variant, isDisabled?: boolean) => {
  if (variant === 'light' || isDisabled) {
    return { bgVariant: 'light', textVariant: 'default' };
  } else if (variant === 'plain') {
    return { bgVariant: 'none', textVariant: 'on' };
  } else if (variant === 'text') {
    return { bgVariant: 'none', textVariant: 'default' };
  } else if (variant === 'surface') {
    return { bgVariant: 'on', textVariant: 'default' };
  } else if (variant === 'solid') {
    return { bgVariant: 'default', textVariant: 'on' };
  }

  return { bgVariant: 'none', textVariant: 'none' };
};
