import type { Color } from '../../types';

export const getReversedColor = (color: Color): Color =>
  (color.endsWith('-on') ? color.replace('-on', '') : `${color}-on`) as Color;
