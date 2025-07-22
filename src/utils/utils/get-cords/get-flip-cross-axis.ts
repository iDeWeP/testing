import type { SidePlacement, Collision, CrossAxis } from '../../../core/types';
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
  ): AxisDimension | undefined => {
    const isShorter = isElShorter(anchor, el, end);

    // &&overflow[orientation].viewStart > overflow[orientation].viewEnd)
    if (
      (isShorter && overflow[orientation].anchorStart < view[start]) ||
      (!isShorter && overflow[orientation].start > view[end])
    ) {
      return {
        [dimension]: size[orientation].end
      };
    }
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
  ): AxisDimension | undefined => {
    const isShorter = isElShorter(anchor, el, end);

    // && overflow[orientation].viewStart < overflow[orientation].viewEnd)
    if (
      (isShorter && overflow[orientation].anchorEnd > view[end]) ||
      (!isShorter && overflow[orientation].end < view[start])
    ) {
      return {
        [dimension]: size[orientation].start
      };
    }
  }
};

export const getFlipCrossAxis = (
  collision: Collision,
  crossAxis: CrossAxis,
  orientation: Orientation,
  dimension: Dimension,
  treshold: TresholdDimension,
  anchor: AnchorDimension,
  el: ElDimension,
  view: ViewDimension,
  size: SizeDimension,
  overflow: OverflowDimension
): AxisDimension | undefined => {
  if (collision === 'flip' && crossAxis !== 'center') {
    return dimensionMap[crossAxis](
      orientation,
      dimension,
      treshold,
      anchor,
      el,
      view,
      size,
      overflow
    );
  }
};
