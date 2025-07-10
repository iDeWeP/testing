import type { CrossAxis } from '../../../core/types';
import type { Orientation, Dimension, SizeDimensions } from './cords.types';

const dimensions = {
  start: (
    orientation: Orientation,
    dimension: Dimension,
    size: SizeDimensions
  ) => ({
    [dimension]: size[orientation].start
  }),
  end: (
    orientation: Orientation,
    dimension: Dimension,
    size: SizeDimensions
  ) => ({
    [dimension]: size[orientation].end
  }),
  center: (
    orientation: Orientation,
    dimension: Dimension,
    size: SizeDimensions
  ) => ({
    [dimension]: size[orientation].center
  })
};

export const getCrossAxis = (
  crossAxis: CrossAxis,
  orientation: Orientation,
  dimension: Dimension,
  size: SizeDimensions
) => dimensions[crossAxis](orientation, dimension, size);
