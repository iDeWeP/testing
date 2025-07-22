import type {
  DefaultPlacement,
  Collision,
  MainAxis
} from '../../../core/types';
import { setValue } from '../set-value/set-value';
import type {
  ViewDimension,
  SizeDimension,
  OverflowDimension
} from './cords.types';

type AxisDimension = {
  top?: number;
  left?: number;
  mainAxis: DefaultPlacement;
};

type DimensionMap = Record<
  DefaultPlacement,
  (
    view: ViewDimension,
    size: SizeDimension,
    overflow: OverflowDimension
  ) => AxisDimension | undefined
>;

const dimensionMap: DimensionMap = {
  top: (view, size, overflow) =>
    setValue(overflow.top < view.top, { top: size.bottom, mainAxis: 'bottom' }),
  bottom: (view, size, overflow) =>
    setValue(overflow.bottom > view.bottom, { top: size.top, mainAxis: 'top' }),
  left: (view, size, overflow) =>
    setValue(overflow.left < view.left, { left: size.left, mainAxis: 'right' }),
  right: (view, size, overflow) =>
    setValue(overflow.right > view.right, { left: size.left, mainAxis: 'left' })
};

export const getFlipMainAxis = (
  collision: Collision,
  mainAxis: MainAxis,
  view: ViewDimension,
  size: SizeDimension,
  overflow: OverflowDimension
): AxisDimension | undefined => {
  if (collision === 'none') {
    return undefined;
  }

  return dimensionMap[mainAxis](view, size, overflow);
};
