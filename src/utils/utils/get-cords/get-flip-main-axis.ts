import type { Collision, MainAxis } from '../../../core/types';
import type {
  SizeDimensions,
  OverflowDimensions,
  ViewDimensions
} from './cords.types';

const dimensions = {
  top: (
    view: ViewDimensions,
    size: SizeDimensions,
    overflow: OverflowDimensions
  ) => overflow.top < view.top && { top: size.bottom, mainAxis: 'bottom' },
  bottom: (
    view: ViewDimensions,
    size: SizeDimensions,
    overflow: OverflowDimensions
  ) => overflow.bottom > view.bottom && { top: size.top, mainAxis: 'top' },
  left: (
    view: ViewDimensions,
    size: SizeDimensions,
    overflow: OverflowDimensions
  ) => overflow.left < view.left && { left: size.left, mainAxis: 'right' },
  right: (
    view: ViewDimensions,
    size: SizeDimensions,
    overflow: OverflowDimensions
  ) => overflow.right > view.right && { left: size.left, mainAxis: 'left' }
};

export const getFlipMainAxis = (
  collision: Collision,
  mainAxis: MainAxis,
  view: ViewDimensions,
  size: SizeDimensions,
  overflow: OverflowDimensions
) => collision !== 'none' && dimensions[mainAxis](view, size, overflow);
