import type { AnchorDimension, ElDimension } from './cords.types';
import { getElDimension } from './get-el-dimension';

export const isElShorter = (
  anchor: AnchorDimension,
  el: ElDimension,
  dimension: 'right' | 'bottom'
): boolean => {
  const length = getElDimension(dimension);

  return anchor[length] > el[length];
};
