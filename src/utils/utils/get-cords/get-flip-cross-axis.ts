import type { Collision, CrossAxis } from '../../../core/types';
import type {
  Orientation,
  Dimension,
  TresholdDimensions,
  AnchorDimensions,
  ElDimensions,
  ViewDimensions,
  SizeDimensions,
  OverflowDimensions
} from './cords.types';
import { isElShorter } from './is-el-shorter';

const dimensions = {
  start: (
    orientation: Orientation,
    dimension: Dimension,
    [start, end]: TresholdDimensions,
    anchor: AnchorDimensions,
    el: ElDimensions,
    view: ViewDimensions,
    size: SizeDimensions,
    overflow: OverflowDimensions
  ) => {
    const isShorter = isElShorter(anchor, el, end);

    return (isShorter && overflow[orientation].anchorStart < view[start]) ||
      (!isShorter && overflow[orientation].start > view[end])
      ? // &&overflow[orientation].viewStart > overflow[orientation].viewEnd)
        { [dimension]: size[orientation].end }
      : {};
  },
  end: (
    orientation: Orientation,
    dimension: Dimension,
    [start, end]: TresholdDimensions,
    anchor: AnchorDimensions,
    el: ElDimensions,
    view: ViewDimensions,
    size: SizeDimensions,
    overflow: OverflowDimensions
  ) => {
    const isShorter = isElShorter(anchor, el, end);

    return (isShorter && overflow[orientation].anchorEnd > view[end]) ||
      (!isShorter && overflow[orientation].end < view[start])
      ? // && overflow[orientation].viewStart < overflow[orientation].viewEnd)
        { [dimension]: size[orientation].start }
      : {};
  }
};

export const getFlipCrossAxis = (
  collision: Collision,
  crossAxis: CrossAxis,
  orientation: Orientation,
  dimension: Dimension,
  tresholdDimensions: TresholdDimensions,
  anchor: AnchorDimensions,
  el: ElDimensions,
  view: ViewDimensions,
  size: SizeDimensions,
  overflow: OverflowDimensions
) =>
  collision === 'flip' && crossAxis !== 'center'
    ? dimensions[crossAxis](
        orientation,
        dimension,
        tresholdDimensions,
        anchor,
        el,
        view,
        size,
        overflow
      )
    : {};
