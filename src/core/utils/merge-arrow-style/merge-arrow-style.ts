import type { CSSProperties } from 'react';
import type { DefaultPlacement, ArrowOffset } from '../../types';
import { getOffset } from '../get-offset/get-offset';

type PlacementMap = Record<
  DefaultPlacement,
  (offset: ArrowOffset) => CSSProperties
>;

const placementMap: PlacementMap = {
  top: (offset): CSSProperties => ({
    bottom: getOffset(offset[1]),
    left: getOffset(offset[0]),
    transform: 'translate(-50%, 100%) rotate(180deg)'
  }),
  bottom: (offset): CSSProperties => ({
    top: getOffset(offset[1]),
    left: getOffset(offset[0]),
    transform: 'translate(-50%, -100%)'
  }),
  left: (offset): CSSProperties => ({
    top: getOffset(offset[0]),
    right: getOffset(offset[1]),
    transform: 'translate(100%, -50%) rotate(90deg)'
  }),
  right: (offset): CSSProperties => ({
    top: getOffset(offset[0]),
    left: getOffset(offset[1]),
    transform: 'translate(-100%, -50%) rotate(-90deg)'
  })
};

export const mergeArrowStyle = (
  placement: DefaultPlacement,
  offset: ArrowOffset,
  defaultStyle?: CSSProperties,
  style?: CSSProperties
): CSSProperties => ({
  ...placementMap[placement](offset),
  ...defaultStyle,
  ...style
});
