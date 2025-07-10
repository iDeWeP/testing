import type { Collision, MainAxis } from '../../../core/types';
import type {
  SizeDimensions,
  OverflowDimensions,
  ViewDimensions
} from './cords.types';

const dimensions = {
  top: (
    size: SizeDimensions,
    overflow: OverflowDimensions,
    view: ViewDimensions
  ) =>
    overflow.top < view.top ? { top: size.bottom, mainAxis: 'bottom' } : {},
  bottom: (
    size: SizeDimensions,
    overflow: OverflowDimensions,
    view: ViewDimensions
  ) =>
    overflow.bottom > view.bottom ? { top: size.top, mainAxis: 'top' } : {},
  left: (
    size: SizeDimensions,
    overflow: OverflowDimensions,
    view: ViewDimensions
  ) =>
    overflow.left < view.left ? { left: size.left, mainAxis: 'right' } : {},
  right: (
    size: SizeDimensions,
    overflow: OverflowDimensions,
    view: ViewDimensions
  ) =>
    overflow.right > view.right ? { left: size.left, mainAxis: 'left' } : {}
};

export const getFlipMainAxis = (
  collision: Collision,
  mainAxis: MainAxis,
  view: ViewDimensions,
  size: SizeDimensions,
  overflow: OverflowDimensions
) => (collision !== 'none' ? dimensions[mainAxis](size, overflow, view) : {});
