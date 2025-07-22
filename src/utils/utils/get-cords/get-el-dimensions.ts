import type { ElDimension } from './cords.types';

export const getElDimension = (
  elDimensions: DOMRect,
  offset: number
): ElDimension => {
  const width = elDimensions.width;
  const height = elDimensions.height;

  return {
    width,
    height,
    offsetWidth: width + offset,
    offsetHeight: height + offset
  };
};
