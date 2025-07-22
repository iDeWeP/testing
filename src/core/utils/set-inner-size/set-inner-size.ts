import type { DefaultSize, Size } from '../../types';

export const setInnerSize = (size: DefaultSize): Size =>
  `${size}-${size}` as Size;
