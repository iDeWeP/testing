import type { Orientation, Collision, CrossAxis } from '../../../core/types';
import type {
  Dimension,
  Length,
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
    length: Length,
    anchor: AnchorDimensions,
    el: ElDimensions,
    view: ViewDimensions,
    size: SizeDimensions,
    overflow: OverflowDimensions
  ) => {
    const isShorter = isElShorter(anchor, el, length);

    return (isShorter && overflow[orientation].anchorStart < 0) ||
      (!isShorter && overflow[orientation].start > view[length])
      ? // &&overflow[orientation].viewStart > overflow[orientation].viewEnd)
        { [dimension]: size[orientation].end }
      : {};
  },
  end: (
    orientation: Orientation,
    dimension: Dimension,
    length: Length,
    anchor: AnchorDimensions,
    el: ElDimensions,
    view: ViewDimensions,
    size: SizeDimensions,
    overflow: OverflowDimensions
  ) => {
    const isShorter = isElShorter(anchor, el, length);

    return (isShorter && overflow[orientation].anchorEnd > view[length]) ||
      (!isShorter && overflow[orientation].end < 0)
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
  length: Length,
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
        length,
        anchor,
        el,
        view,
        size,
        overflow
      )
    : {};
