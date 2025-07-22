import type { Color } from '../../types';

export const isColorReversed = (color: Color): boolean => color.endsWith('-on');
