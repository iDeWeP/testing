import type { RefObject } from 'react';
import type {
  MainAxis,
  CrossAxis,
  Placement,
  Cursor,
  Float
} from '../../../core/types';
import isPlacementHorizontal from '../isPlacementHorizontal/isPlacementHorizontal';
import { calculateOverflowDimensions } from './calculateOverflowDimensions';
import { calculateSizeDimensions } from './calculateSizeDimensions';
import { getAnchorDimensions } from './getAnchorDimensions';
import { getAxises } from './getAxises';
import { getElDimensions } from './getElDimensions';
import { getViewDimensions } from './getViewDimensions';

interface Cord {
  top: number;
  left: number;
  mainAxis: MainAxis;
  crossAxis: CrossAxis;
}

const getCords = (
  ref: RefObject<HTMLDivElement | null>,
  placement: Placement,
  float: Float,
  offset: number,
  isPorted: boolean,
  anchorRef?: RefObject<HTMLElement | null>,
  isFollowingCursor?: boolean,
  cursor?: Cursor
): Cord => {
  const [mainAxis, crossAxis] = getAxises(placement);
  const cord = { top: 0, left: 0, mainAxis, crossAxis };
  const isResponsive = float !== 'none';

  if (!ref.current || !anchorRef?.current) {
    return cord;
  }

  const el = getElDimensions(ref, offset);
  const view = getViewDimensions();
  const anchor = getAnchorDimensions(
    anchorRef,
    isPorted,
    isFollowingCursor,
    cursor
  );

  const overflow = calculateOverflowDimensions(anchor, el, view);
  const size = calculateSizeDimensions(anchor, el, view, offset);

  // Adjust position based on the main axis
  if (mainAxis === 'top') {
    cord.top = size.top;

    if (isResponsive && overflow.top < 0) {
      cord.top = size.bottom;
      cord.mainAxis = 'bottom';
    }
  }

  if (mainAxis === 'bottom') {
    cord.top = size.bottom;

    if (isResponsive && overflow.bottom > view.height) {
      cord.top = size.top;
      cord.mainAxis = 'top';
    }
  }

  if (mainAxis === 'left') {
    cord.left = size.left;

    if (isResponsive && overflow.left < 0) {
      cord.left = size.right;
      cord.mainAxis = 'right';
    }
  }

  if (mainAxis === 'right') {
    cord.left = size.right;

    if (isResponsive && overflow.right > view.width) {
      cord.left = size.left;
      cord.mainAxis = 'left';
    }
  }

  // Adjust position based on the cross axis
  const isHorizontal = isPlacementHorizontal(mainAxis);
  const orientation = isHorizontal ? 'horizontal' : 'vertical';
  const axis = isHorizontal ? 'left' : 'top';
  const length = isHorizontal ? 'width' : 'height';

  if (crossAxis === 'start') {
    cord[axis] = size[orientation].start;

    if (
      isResponsive &&
      ((overflow[orientation].start > view[length] &&
        overflow[orientation].viewStart > overflow[orientation].viewEnd &&
        anchor[length] < el[length]) ||
        (overflow[orientation].anchorStart < 0 && anchor[length] > el[length]))
    ) {
      cord[axis] = size[orientation].end;
    }
  }

  if (crossAxis === 'end') {
    cord[axis] = size[orientation].end;

    if (
      isResponsive &&
      ((overflow[orientation].end < 0 &&
        overflow[orientation].viewStart < overflow[orientation].viewEnd &&
        anchor[length] < el[length]) ||
        (overflow[orientation].anchorEnd > view[length] &&
          anchor[length] > el[length]))
    ) {
      cord[axis] = size[orientation].start;
    }
  }

  if (crossAxis === 'center') {
    cord[axis] = size[orientation].center;

    const position = isHorizontal ? 'x' : 'y';
    const offsetSize = isHorizontal ? 'offsetWidth' : 'offsetHeight';

    if (isResponsive && overflow[orientation].centerEnd > view[length]) {
      if (anchor[length] < el[length]) {
        cord[axis] =
          size[orientation].viewEnd + el[length] < anchor[offsetSize]
            ? size[orientation].end
            : size[orientation].viewEnd;
      } else {
        cord[axis] =
          size[orientation].viewEnd < anchor[position]
            ? size[orientation].start
            : size[orientation].viewEnd;
      }
    } else if (isResponsive && overflow[orientation].centerStart < 0) {
      if (anchor[length] < el[length]) {
        cord[axis] =
          size[orientation].viewStart > anchor[position]
            ? size[orientation].start
            : size[orientation].viewStart;
      } else {
        cord[axis] =
          size[orientation].viewStart + el[length] > anchor[offsetSize]
            ? size[orientation].end
            : size[orientation].viewStart;
      }
    }
  }

  return cord;
};

export default getCords;
