import type { CrossAxis, CrossPlacement } from '../../../core/types';
import type {
  Orientation,
  Dimension,
  SizeDimension,
  AxisDimension
} from './cords.types';

type DimensionMap = Record<
  CrossPlacement,
  (
    orientation: Orientation,
    dimension: Dimension,
    size: SizeDimension
  ) => AxisDimension
>;

const dimensionMap: DimensionMap = {
  start: (orientation, dimension, size) => ({
    [dimension]: size[orientation].start
  }),
  end: (orientation, dimension, size) => ({
    [dimension]: size[orientation].end
  }),
  center: (orientation, dimension, size) => ({
    [dimension]: size[orientation].center
  })
};

export const getCrossAxis = (
  crossAxis: CrossAxis,
  orientation: Orientation,
  dimension: Dimension,
  size: SizeDimension
): AxisDimension => dimensionMap[crossAxis](orientation, dimension, size);
