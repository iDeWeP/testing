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

const getOffsetSize = (orientation: Orientation) =>
  orientation === 'horizontal' ? 'offsetWidth' : 'offsetHeight';

const getPosition = (orientation: Orientation) =>
  orientation === 'horizontal' ? 'left' : 'top';

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
    if (
      isElShorter(anchor, el, length) &&
      overflow[orientation].anchorStart < 0
    ) {
      return {
        [dimension]:
          size[orientation].viewStart + el[length] <
          anchor[getOffsetSize(orientation)]
            ? size[orientation].viewStart
            : size[orientation].end
      };
    }

    if (
      !isElShorter(anchor, el, length) &&
      overflow[orientation].start > view[length]
    ) {
      return {
        [dimension]:
          size[orientation].viewEnd + el[length] <
          anchor[getOffsetSize(orientation)]
            ? size[orientation].end
            : size[orientation].viewEnd
      };
    }
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
    if (
      isElShorter(anchor, el, length) &&
      overflow[orientation].anchorEnd > view[length]
    ) {
      return {
        [dimension]:
          size[orientation].viewEnd < anchor[getPosition(orientation)]
            ? size[orientation].start
            : size[orientation].viewEnd
      };
    }

    if (!isElShorter(anchor, el, length) && overflow[orientation].end < 0) {
      return {
        [dimension]:
          size[orientation].viewStart < anchor[getPosition(orientation)]
            ? size[orientation].viewStart
            : size[orientation].start
      };
    }
  },
  center: (
    orientation: Orientation,
    dimension: Dimension,
    length: Length,
    anchor: AnchorDimensions,
    el: ElDimensions,
    view: ViewDimensions,
    size: SizeDimensions,
    overflow: OverflowDimensions
  ) => {
    if (overflow[orientation].centerEnd > view[length]) {
      if (isElShorter(anchor, el, length)) {
        return {
          [dimension]:
            size[orientation].viewEnd < anchor[getPosition(orientation)]
              ? size[orientation].start
              : size[orientation].viewEnd
        };
      } else {
        return {
          [dimension]:
            size[orientation].viewEnd + el[length] <
            anchor[getOffsetSize(orientation)]
              ? size[orientation].end
              : size[orientation].viewEnd
        };
      }
    }

    if (overflow[orientation].centerStart < 0) {
      if (isElShorter(anchor, el, length)) {
        return {
          [dimension]:
            size[orientation].viewStart + el[length] <
            anchor[getOffsetSize(orientation)]
              ? size[orientation].viewStart
              : size[orientation].end
        };
      } else {
        return {
          [dimension]:
            size[orientation].viewStart < anchor[getPosition(orientation)]
              ? size[orientation].viewStart
              : size[orientation].start
        };
      }
    }
  }
};

export const getShiftCrossAxis = (
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
  collision === 'shift'
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
