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
import { getElDimension } from './get-el-dimension';
import { isElShorter } from './is-el-shorter';

const getOffsetSize = (orientation: Orientation) =>
  orientation === 'horizontal' ? 'offsetWidth' : 'offsetHeight';

const getPosition = (orientation: Orientation) =>
  orientation === 'horizontal' ? 'left' : 'top';

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

    if (isShorter && overflow[orientation].anchorStart < view[start]) {
      return {
        [dimension]:
          size[orientation].viewStart + el[getElDimension(end)] <
          anchor[getOffsetSize(orientation)]
            ? size[orientation].viewStart
            : size[orientation].end
      };
    }

    if (!isShorter && overflow[orientation].start > view[end]) {
      return {
        [dimension]:
          size[orientation].viewEnd + el[getElDimension(end)] <
          anchor[getOffsetSize(orientation)]
            ? size[orientation].end
            : size[orientation].viewEnd
      };
    }
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

    if (isShorter && overflow[orientation].anchorEnd > view[end]) {
      return {
        [dimension]:
          size[orientation].viewEnd < anchor[getPosition(orientation)]
            ? size[orientation].start
            : size[orientation].viewEnd
      };
    }

    if (!isShorter && overflow[orientation].end < view[start]) {
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
    [start, end]: TresholdDimensions,
    anchor: AnchorDimensions,
    el: ElDimensions,
    view: ViewDimensions,
    size: SizeDimensions,
    overflow: OverflowDimensions
  ) => {
    const isShorter = isElShorter(anchor, el, end);

    if (overflow[orientation].centerEnd > view[end]) {
      if (isShorter) {
        return {
          [dimension]:
            size[orientation].viewEnd < anchor[getPosition(orientation)]
              ? size[orientation].start
              : size[orientation].viewEnd
        };
      } else {
        return {
          [dimension]:
            size[orientation].viewEnd + el[getElDimension(end)] <
            anchor[getOffsetSize(orientation)]
              ? size[orientation].end
              : size[orientation].viewEnd
        };
      }
    }

    if (overflow[orientation].centerStart < view[start]) {
      if (isShorter) {
        return {
          [dimension]:
            size[orientation].viewStart + el[getElDimension(end)] <
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
  tresholdDimensions: TresholdDimensions,
  anchor: AnchorDimensions,
  el: ElDimensions,
  view: ViewDimensions,
  size: SizeDimensions,
  overflow: OverflowDimensions
) =>
  collision === 'shift' &&
  dimensions[crossAxis](
    orientation,
    dimension,
    tresholdDimensions,
    anchor,
    el,
    view,
    size,
    overflow
  );
