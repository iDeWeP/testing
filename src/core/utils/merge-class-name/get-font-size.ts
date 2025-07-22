import type { Size } from '../../types';

export const getFontSize = (size: Size): string => {
  const sizes = size.split('-');

  return sizes.length === 2 ? 'xs' : sizes[0];
};
