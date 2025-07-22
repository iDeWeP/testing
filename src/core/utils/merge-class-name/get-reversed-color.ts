import type { Color } from '../../types';

export const getReversedColor = (color: Color): string =>
  color.endsWith('-on') ? color.replace('-on', '') : `${color}-on`;
