import type { AnchorDimensions, ElDimensions, Length } from './getCords.types';

export const isElShorter = (
  anchor: AnchorDimensions,
  el: ElDimensions,
  length: Length
) => anchor[length] > el[length];
