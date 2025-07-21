import type { Color } from '../../types';

export const isColorReversed = (color: Color) => color.endsWith('-on');
