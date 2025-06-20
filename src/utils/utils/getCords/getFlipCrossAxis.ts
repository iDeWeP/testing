import type { Orientation, CrossAxis, Float } from '../../../core/types';
import type {
  Dimension,
  Length,
  AnchorDimensions,
  ElDimensions,
  ViewDimensions,
  SizeDimensions,
  OverflowDimensions
} from './getCords.types';
import { isElShorter } from './isElShorter';

const dimensions = {
  start: (
    orientation: Orientation,
    dimension: Dimension,
    length: Length,
    anchor: AnchorDimensions,
    el: ElDimensions,
    view: ViewDimensions,
    size: SizeDimensions,
    overflow: OverflowDimensions
  ) =>
    (isElShorter(anchor, el, length) &&
      overflow[orientation].anchorStart < 0) ||
    (!isElShorter(anchor, el, length) &&
      overflow[orientation].start > view[length])
      ? // &&overflow[orientation].viewStart > overflow[orientation].viewEnd)
        { [dimension]: size[orientation].end }
      : {},
  end: (
    orientation: Orientation,
    dimension: Dimension,
    length: Length,
    anchor: AnchorDimensions,
    el: ElDimensions,
    view: ViewDimensions,
    size: SizeDimensions,
    overflow: OverflowDimensions
  ) =>
    (isElShorter(anchor, el, length) &&
      overflow[orientation].anchorEnd > view[length]) ||
    (!isElShorter(anchor, el, length) && overflow[orientation].end < 0)
      ? // && overflow[orientation].viewStart < overflow[orientation].viewEnd)
        { [dimension]: size[orientation].start }
      : {}
};

export const getFlipCrossAxis = (
  crossAxis: CrossAxis,
  float: Float,
  orientation: Orientation,
  dimension: Dimension,
  length: Length,
  anchor: AnchorDimensions,
  el: ElDimensions,
  view: ViewDimensions,
  size: SizeDimensions,
  overflow: OverflowDimensions
) =>
  float === 'flip' && crossAxis !== 'center'
    ? dimensions[crossAxis](
        orientation,
        dimension,
        length,
        anchor,
        el,
        view,
        size,
        overflow
      )
    : {};
