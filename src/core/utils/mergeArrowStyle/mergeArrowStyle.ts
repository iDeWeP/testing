import type { CSSProperties } from 'react';
import type { DefaultPlacement } from '../../types';
import { getOffset } from '../getOffset/getOffset';

export const mergeArrowStyle = (
  placement: DefaultPlacement,
  offset: [number | string, number | string],
  style: CSSProperties = {},
  defaultStyle: CSSProperties = {}
) => {
  if (placement === 'top') {
    return {
      bottom: getOffset(offset[0]),
      left: getOffset(offset[1]),
      transform: 'translate(-50%, 100%) rotate(180deg)',
      ...style,
      ...defaultStyle
    };
  } else if (placement === 'bottom') {
    return {
      top: getOffset(offset[0]),
      left: getOffset(offset[1]),
      transform: 'translate(-50%, -100%)',
      ...style,
      ...defaultStyle
    };
  } else if (placement === 'left') {
    return {
      top: getOffset(offset[1]),
      right: getOffset(offset[0]),
      transform: 'translate(100%, -50%) rotate(90deg)',
      ...style,
      ...defaultStyle
    };
  } else if (placement === 'right') {
    return {
      top: getOffset(offset[1]),
      left: getOffset(offset[0]),
      transform: 'translate(-100%, -50%) rotate(-90deg)',
      ...style,
      ...defaultStyle
    };
  }

  return { ...style, ...defaultStyle };
};
