import type { Size, DefaultSize } from '../../types';

export const getFontSize = (size: Size): DefaultSize => {
  const sizes = size.split('-');

  return sizes.length === 2 ? 'xs' : (sizes[0] as DefaultSize);
};
