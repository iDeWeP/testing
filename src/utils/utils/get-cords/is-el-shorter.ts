import type { AnchorDimension, ElDimension } from './cords.types';
import { getElLength } from './get-el-length';

export const isElShorter = (
  anchor: AnchorDimension,
  el: ElDimension,
  dimension: 'right' | 'bottom'
): boolean => {
  const length = getElLength(dimension);

  return anchor[length] > el[length];
};
