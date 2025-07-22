import type { ElDimension } from './cords.types';

export const getElDimension = (
  elDimension: DOMRect,
  offset: number
): ElDimension => {
  const width = elDimension.width;
  const height = elDimension.height;

  return {
    width,
    height,
    offsetWidth: width + offset,
    offsetHeight: height + offset
  };
};
