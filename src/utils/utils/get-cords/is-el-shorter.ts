import type { AnchorDimensions, ElDimensions } from './cords.types';
import { getElDimension } from './get-el-dimension';

export const isElShorter = (
  anchor: AnchorDimensions,
  el: ElDimensions,
  dimension: 'right' | 'bottom'
) => {
  const length = getElDimension(dimension);

  return anchor[length] > el[length];
};
