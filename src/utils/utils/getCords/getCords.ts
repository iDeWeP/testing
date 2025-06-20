import type { RefObject } from 'react';
import type {
  MainAxis,
  CrossAxis,
  Placement,
  Float,
  Cursor
} from '../../../core/types';
import { isPlacementHorizontal } from '../isPlacementHorizontal/isPlacementHorizontal';
import { calculateOverflowDimensions } from './calculateOverflowDimensions';
import { calculateSizeDimensions } from './calculateSizeDimensions';
import { getAnchorDimensions } from './getAnchorDimensions';
import { getAutoCrossAxis } from './getAutoCrossAxis';
import { getAxises } from './getAxises';
import { getCrossAxis } from './getCrossAxis';
import { getElDimensions } from './getElDimensions';
import { getFlipCrossAxis } from './getFlipCrossAxis';
import { getFloatMainAxis } from './getFloatMainAxis';
import { getMainAxis } from './getMainAxis';
import { getViewDimensions } from './getViewDimensions';

type Cord = {
  top: number;
  left: number;
  mainAxis: MainAxis;
  crossAxis: CrossAxis;
};

export const getCords = (
  ref: RefObject<HTMLDivElement | null>,
  placement: Placement,
  float: Float,
  offset: number,
  isPorted: boolean,
  anchorRef: RefObject<HTMLElement | null>,
  isFollowingCursor?: boolean,
  cursor?: Cursor
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

  const overflow = calculateOverflowDimensions(anchor, el, view);
  const size = calculateSizeDimensions(anchor, el, view, offset);

  const isHorizontal = isPlacementHorizontal(mainAxis);
  const orientation = isHorizontal ? 'horizontal' : 'vertical';
  const dimension = isHorizontal ? 'left' : 'top';
  const length = isHorizontal ? 'width' : 'height';

  // Adjust position based on the main axis
  return {
    ...getMainAxis(mainAxis, size),
    ...getFloatMainAxis(mainAxis, float, size, overflow, view),
    ...getCrossAxis(crossAxis, dimension, orientation, size),
    ...getFlipCrossAxis(
      crossAxis,
      float,
      dimension,
      orientation,
      length,
      anchor,
      el,
      view,
      size,
      overflow
    ),
    ...getAutoCrossAxis(
      crossAxis,
      float,
      dimension,
      orientation,
      length,
      anchor,
      el,
      view,
      size,
      overflow
    )
  } as Cord;
};
