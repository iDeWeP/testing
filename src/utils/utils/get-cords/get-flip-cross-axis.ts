import type { Collision, CrossAxis } from '../../../core/types';
import type {
  Orientation,
  Dimension,
  TresholdDimension,
  AnchorDimension,
  ElDimension,
  ViewDimension,
  SizeDimension,
  OverflowDimension
} from './cords.types';
import { isElShorter } from './is-el-shorter';

const dimensionMap = {
  start: (
    orientation: Orientation,
    dimension: Dimension,
    [start, end]: TresholdDimension,
    anchor: AnchorDimension,
    el: ElDimension,
    view: ViewDimension,
    size: SizeDimension,
    overflow: OverflowDimension
  ) => {
    const isShorter = isElShorter(anchor, el, end);

    return (
      (isShorter && overflow[orientation].anchorStart < view[start]) ||
      (!isShorter &&
        overflow[orientation].start > view[end] && {
          // &&overflow[orientation].viewStart > overflow[orientation].viewEnd)
          [dimension]: size[orientation].end
        })
    );
  },
  end: (
    orientation: Orientation,
    dimension: Dimension,
    [start, end]: TresholdDimension,
    anchor: AnchorDimension,
    el: ElDimension,
    view: ViewDimension,
    size: SizeDimension,
    overflow: OverflowDimension
  ) => {
    const isShorter = isElShorter(anchor, el, end);

    return (
      (isShorter && overflow[orientation].anchorEnd > view[end]) ||
      (!isShorter &&
        overflow[orientation].end < view[start] && {
          // && overflow[orientation].viewStart < overflow[orientation].viewEnd)
          [dimension]: size[orientation].start
        })
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
) =>
  collision === 'flip' &&
  crossAxis !== 'center' &&
  dimensionMap[crossAxis](
    orientation,
    dimension,
    tresholdDimensions,
    anchor,
    el,
    view,
    size,
    overflow
  );
