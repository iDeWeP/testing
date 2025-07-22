import type { Collision, MainAxis } from '../../../core/types';
import type {
  ViewDimension,
  SizeDimension,
  OverflowDimension
} from './cords.types';

const dimensionMap = {
  top: (
    view: ViewDimension,
    size: SizeDimension,
    overflow: OverflowDimension
  ) => overflow.top < view.top && { top: size.bottom, mainAxis: 'bottom' },
  bottom: (
    view: ViewDimension,
    size: SizeDimension,
    overflow: OverflowDimension
  ) => overflow.bottom > view.bottom && { top: size.top, mainAxis: 'top' },
  left: (
    view: ViewDimension,
    size: SizeDimension,
    overflow: OverflowDimension
  ) => overflow.left < view.left && { left: size.left, mainAxis: 'right' },
  right: (
    view: ViewDimension,
    size: SizeDimension,
    overflow: OverflowDimension
  ) => overflow.right > view.right && { left: size.left, mainAxis: 'left' }
};

export const getFlipMainAxis = (
  collision: Collision,
  mainAxis: MainAxis,
  view: ViewDimension,
  size: SizeDimension,
  overflow: OverflowDimension
) => collision !== 'none' && dimensionMap[mainAxis](view, size, overflow);
