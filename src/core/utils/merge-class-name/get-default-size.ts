import type { Size, DefaultSize } from '../../types';

export const getDefaultSize = (size: Size) => size.split('-')[0] as DefaultSize;
