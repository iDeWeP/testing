import type { Variant } from '../../../../types';

export const getBgVariant = (variant: Variant) => {
  if (variant === 'solid') {
    return 'default';
  } else if (variant === 'light') {
    return 'light';
  } else if (variant === 'surface') {
    return 'on';
  }

  return 'none';
};
