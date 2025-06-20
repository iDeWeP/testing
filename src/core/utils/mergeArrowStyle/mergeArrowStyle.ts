import type { CSSProperties } from 'react';
import type { DefaultPlacement } from '../../types';
import { getOffset } from '../getOffset/getOffset';

const placements = {
  top: 'translate(-50%, 100%) rotate(180deg)',
  bottom: 'translate(-50%, -100%)',
  left: 'translate(100%, -50%) rotate(90deg)',
  right: 'translate(-100%, -50%) rotate(-90deg)'
};

export const mergeArrowStyle = (
  placement: DefaultPlacement,
  offset: [number | string, number | string],
  style?: CSSProperties,
  defaultStyle?: CSSProperties
) => {
  const placementStyle: CSSProperties = {};

  if (placement === 'top') {
    placementStyle.bottom = getOffset(offset[1]);
    placementStyle.left = getOffset(offset[0]);
  } else if (placement === 'bottom') {
    placementStyle.top = getOffset(offset[1]);
    placementStyle.left = getOffset(offset[0]);
  } else if (placement === 'left') {
    placementStyle.top = getOffset(offset[0]);
    placementStyle.right = getOffset(offset[1]);
  } else if (placement === 'right') {
    placementStyle.top = getOffset(offset[0]);
    placementStyle.left = getOffset(offset[1]);
  }

  return {
    transform: placements[placement],
    ...placementStyle,
    ...style,
    ...defaultStyle
  };
};
