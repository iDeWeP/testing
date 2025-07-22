import type { RefObject } from 'react';
import type {
  MainAxis,
  CrossAxis,
  Collision,
  Placement,
  Cursor
} from '../../../core/types';
import { isPlacementHorizontal } from '../is-placement-horizontal/is-placement-horizontal';
import type { TresholdDimension } from './cords.types';
import { getAnchorDimension } from './get-anchor-dimension';
import { getAxis } from './get-axis';
import { getCrossAxis } from './get-cross-axis';
import { getElDimension } from './get-el-dimensions';
import { getFlipCrossAxis } from './get-flip-cross-axis';
import { getFlipMainAxis } from './get-flip-main-axis';
import { getMainAxis } from './get-main-axis';
import { getOverflowDimension } from './get-overflow-dimension';
import { getShiftCrossAxis } from './get-shift-cross-axis';
import { getSizeDimension } from './get-size-dimension';
import { getViewDimension } from './get-view-dimension';

type Cord = {
  top: number;
  left: number;
  mainAxis: MainAxis;
  crossAxis: CrossAxis;
};

export const getCords = (
  ref: RefObject<HTMLDivElement | null>,
  collision: Collision,
  placement: Placement,
  offset: number,
  threshold: number,
  isPorted: boolean,
  anchorRef?: RefObject<HTMLElement | null>,
  cursor?: Cursor
): Cord => {
  const { mainAxis, crossAxis } = getAxis(placement);
  const cord = { top: 0, left: 0, mainAxis, crossAxis };

  if (!ref.current || !anchorRef?.current) {
    return cord;
  }

  const anchor = getAnchorDimension(anchorRef.current, isPorted, cursor);
  const el = getElDimension(ref.current.getBoundingClientRect(), offset);
  const view = getViewDimension(threshold);

  const size = getSizeDimension(anchor, el, view, offset);
  const overflow = getOverflowDimension(anchor, el, view);

  const isHorizontal = isPlacementHorizontal(mainAxis);
  const orientation = isHorizontal ? 'horizontal' : 'vertical';
  const dimension = isHorizontal ? 'left' : 'top';
  const thresholdDimension: TresholdDimension = isHorizontal
    ? ['left', 'right']
    : ['top', 'bottom'];

  return {
    ...cord,
    ...getMainAxis(mainAxis, size),
    ...getFlipMainAxis(collision, mainAxis, view, size, overflow),
    ...getCrossAxis(crossAxis, orientation, dimension, size),
    ...getFlipCrossAxis(
      collision,
      crossAxis,
      orientation,
      dimension,
      thresholdDimension,
      anchor,
      el,
      view,
      size,
      overflow
    ),
    ...getShiftCrossAxis(
      collision,
      crossAxis,
      orientation,
      dimension,
      thresholdDimension,
      anchor,
      el,
      view,
      size,
      overflow
    )
  };
};
