import type { Orientation, CrossAxis, Float } from '../../../core/types';
import type {
  Dimension,
  Length,
  SizeDimensions,
  OverflowDimensions,
  ElDimensions,
  AnchorDimensions,
  ViewDimensions
} from './getCords.types';
import { isElShorter } from './isElShorter';

const getOffsetSize = (orientation: Orientation) =>
  orientation === 'horizontal' ? 'offsetWidth' : 'offsetHeight';

const getPosition = (orientation: Orientation) =>
  orientation === 'horizontal' ? 'left' : 'top';

const dimensions = {
  start: (
    dimension: Dimension,
    orientation: Orientation,
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
    dimension: Dimension,
    orientation: Orientation,
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
    dimension: Dimension,
    orientation: Orientation,
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

export const getAutoCrossAxis = (
  crossAxis: CrossAxis,
  float: Float,
  dimension: Dimension,
  orientation: Orientation,
  length: Length,
  anchor: AnchorDimensions,
  el: ElDimensions,
  view: ViewDimensions,
  size: SizeDimensions,
  overflow: OverflowDimensions
) =>
  float === 'auto'
    ? dimensions[crossAxis](
        dimension,
        orientation,
        length,
        anchor,
        el,
        view,
        size,
        overflow
      )
    : {};
