import type { RefObject } from 'react';
import type {
  MainAxis,
  CrossAxis,
  Placement,
  Float,
  Cursor
} from '../../../core/types';
import { isPlacementHorizontal } from '../is-placement-horizontal/is-placement-horizontal';
import { calculateOverflowDimensions } from './calculate-overflow-dimensions';
import { calculateSizeDimensions } from './calculate-size-dimensions';
import { getAnchorDimensions } from './get-anchor-dimensions';
import { getAutoCrossAxis } from './get-auto-cross-axis';
import { getAxises } from './get-axises';
import { getCrossAxis } from './get-cross-axis';
import { getElDimensions } from './get-el-dimensions';
import { getFlipCrossAxis } from './get-flip-cross-axis';
import { getFloatMainAxis } from './get-float-main-axis';
import { getMainAxis } from './get-main-axis';
import { getViewDimensions } from './get-view-dimensions';

type Cord = {
  top: number;
  left: number;
  mainAxis: MainAxis;
  crossAxis: CrossAxis;
};

export const getCords = (
  anchorRef: RefObject<HTMLElement | null>,
  ref: RefObject<HTMLDivElement | null>,
  float: Float,
  placement: Placement,
  offset: number,
  isPorted: boolean,
  cursor?: Cursor,
  isFollowingCursor?: boolean
): Cord => {
  const [mainAxis, crossAxis] = getAxises(placement);
  const cord = { top: 0, left: 0, mainAxis, crossAxis };

  if (!ref.current || !anchorRef.current) {
    return cord;
  }

  const anchor = getAnchorDimensions(
    anchorRef.current,
    isPorted,
    isFollowingCursor,
    cursor
  );
  const el = getElDimensions(ref.current.getBoundingClientRect(), offset);
  const view = getViewDimensions();

  const size = calculateSizeDimensions(anchor, el, view, offset);
  const overflow = calculateOverflowDimensions(anchor, el, view);

  const isHorizontal = isPlacementHorizontal(mainAxis);
  const orientation = isHorizontal ? 'horizontal' : 'vertical';
  const dimension = isHorizontal ? 'left' : 'top';
  const length = isHorizontal ? 'width' : 'height';

  return {
    ...getMainAxis(mainAxis, size),
    ...getFloatMainAxis(float, mainAxis, view, size, overflow),
    ...getCrossAxis(crossAxis, orientation, dimension, size),
    ...getFlipCrossAxis(
      float,
      crossAxis,
      orientation,
      dimension,
      length,
      anchor,
      el,
      view,
      size,
      overflow
    ),
    ...getAutoCrossAxis(
      float,
      crossAxis,
      orientation,
      dimension,
      length,
      anchor,
      el,
      view,
      size,
      overflow
    )
  } as Cord;
};
