import type { CrossAxis } from '../../../core/types';
import type { Orientation, Dimension, SizeDimension } from './cords.types';

const dimensionMap = {
  start: (
    orientation: Orientation,
    dimension: Dimension,
    size: SizeDimension
  ) => ({
    [dimension]: size[orientation].start
  }),
  end: (
    orientation: Orientation,
    dimension: Dimension,
    size: SizeDimension
  ) => ({
    [dimension]: size[orientation].end
  }),
  center: (
    orientation: Orientation,
    dimension: Dimension,
    size: SizeDimension
  ) => ({
    [dimension]: size[orientation].center
  })
};

export const getCrossAxis = (
  crossAxis: CrossAxis,
  orientation: Orientation,
  dimension: Dimension,
  size: SizeDimension
) => dimensionMap[crossAxis](orientation, dimension, size);
