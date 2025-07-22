import type { Size, DefaultSize } from '../../types';

export const getDefaultSize = (size: Size): DefaultSize =>
  size.split('-')[0] as DefaultSize;
