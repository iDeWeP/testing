import type { Orientation, CrossAxis } from '../../../core/types';
import type { Dimension, SizeDimensions } from './getCords.types';

const dimensions = {
  start: (
    dimension: Dimension,
    orientation: Orientation,
    size: SizeDimensions
  ) => ({
    [dimension]: size[orientation].start
  }),
  end: (
    dimension: Dimension,
    orientation: Orientation,
    size: SizeDimensions
  ) => ({
    [dimension]: size[orientation].end
  }),
  center: (
    dimension: Dimension,
    orientation: Orientation,
    size: SizeDimensions
  ) => ({
    [dimension]: size[orientation].center
  })
};

export const getCrossAxis = (
  crossAxis: CrossAxis,
  dimension: Dimension,
  orientation: Orientation,
  size: SizeDimensions
) => dimensions[crossAxis](dimension, orientation, size);
