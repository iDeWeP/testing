import type { CrossPlacement, Collision, CrossAxis } from '../../../core/types';
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
import { getElLength } from './get-el-length';
import { isElShorter } from './is-el-shorter';

type DimensionMap = Record<
  CrossPlacement,
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

const getOffsetSize = (
  orientation: Orientation
): 'offsetWidth' | 'offsetHeight' =>
  orientation === 'horizontal' ? 'offsetWidth' : 'offsetHeight';

const getPosition = (orientation: Orientation): 'left' | 'top' =>
  orientation === 'horizontal' ? 'left' : 'top';

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

    if (isShorter && overflow[orientation].anchorStart < view[start]) {
      return {
        [dimension]:
          size[orientation].viewStart + el[getElLength(end)] <
          anchor[getOffsetSize(orientation)]
            ? size[orientation].viewStart
            : size[orientation].end
      };
    }

    if (!isShorter && overflow[orientation].start > view[end]) {
      return {
        [dimension]:
          size[orientation].viewEnd + el[getElLength(end)] <
          anchor[getOffsetSize(orientation)]
            ? size[orientation].end
            : size[orientation].viewEnd
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
            size[orientation].viewEnd + el[getElLength(end)] <
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
            size[orientation].viewStart + el[getElLength(end)] <
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
  TresholdDimension: TresholdDimension,
  anchor: AnchorDimension,
  el: ElDimension,
  view: ViewDimension,
  size: SizeDimension,
  overflow: OverflowDimension
): AxisDimension | undefined => {
  if (collision === 'shift') {
    return dimensionMap[crossAxis](
      orientation,
      dimension,
      TresholdDimension,
      anchor,
      el,
      view,
      size,
      overflow
    );
  }
};
