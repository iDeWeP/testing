import type { Collision, CrossAxis, SidePlacement } from '../../../core/types';
import { setValue } from '../set-value/set-value';
import type {
  Orientation,
  Dimension,
  TresholdDimension,
  AnchorDimension,
  ElDimension,
  ViewDimension,
  SizeDimension,
  OverflowDimension,
  AxisDimension
} from './cords.types';
import { isElShorter } from './is-el-shorter';

type DimensionMap = Record<
  SidePlacement,
  (
    orientation: Orientation,
    dimension: Dimension,
    treshold: TresholdDimension,
    anchor: AnchorDimension,
    el: ElDimension,
    view: ViewDimension,
    size: SizeDimension,
    overflow: OverflowDimension
  ) => AxisDimension | undefined
>;

const dimensionMap: DimensionMap = {
  start: (
    orientation,
    dimension,
    [start, end],
    anchor,
    el,
    view,
    size,
    overflow
  ) => {
    const isShorter = isElShorter(anchor, el, end);

    // &&overflow[orientation].viewStart > overflow[orientation].viewEnd)
    return setValue(
      (isShorter && overflow[orientation].anchorStart < view[start]) ||
        (!isShorter && overflow[orientation].start > view[end]),
      {
        [dimension]: size[orientation].end
      }
    );
  },
  end: (
    orientation,
    dimension,
    [start, end],
    anchor,
    el,
    view,
    size,
    overflow
  ) => {
    const isShorter = isElShorter(anchor, el, end);

    // && overflow[orientation].viewStart < overflow[orientation].viewEnd)
    return setValue(
      (isShorter && overflow[orientation].anchorEnd > view[end]) ||
        (!isShorter && overflow[orientation].end < view[start]),
      {
        [dimension]: size[orientation].start
      }
    );
  }
};

export const getFlipCrossAxis = (
  collision: Collision,
  crossAxis: CrossAxis,
  orientation: Orientation,
  dimension: Dimension,
  tresholdDimensions: TresholdDimension,
  anchor: AnchorDimension,
  el: ElDimension,
  view: ViewDimension,
  size: SizeDimension,
  overflow: OverflowDimension
): AxisDimension | undefined => {
  if (collision !== 'flip' || crossAxis === 'center') {
    return undefined;
  }

  return dimensionMap[crossAxis](
    orientation,
    dimension,
    tresholdDimensions,
    anchor,
    el,
    view,
    size,
    overflow
  );
};
