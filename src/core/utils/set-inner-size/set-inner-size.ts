import type { DefaultSize, Size } from '../../types';

export const setInnerSize = (size: DefaultSize) => `${size}-${size}` as Size;
