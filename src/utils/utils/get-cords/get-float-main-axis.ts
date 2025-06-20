import type { MainAxis, Float } from '../../../core/types';
import type {
  SizeDimensions,
  OverflowDimensions,
  ViewDimensions
} from './cords.types';

const dimensions = {
  top: (size: SizeDimensions, overflow: OverflowDimensions) =>
    overflow.top < 0 ? { top: size.bottom, mainAxis: 'bottom' } : {},
  bottom: (
    size: SizeDimensions,
    overflow: OverflowDimensions,
    view: ViewDimensions
  ) =>
    overflow.bottom > view.height ? { top: size.top, mainAxis: 'top' } : {},
  left: (size: SizeDimensions, overflow: OverflowDimensions) =>
    overflow.left < 0 ? { left: size.left, mainAxis: 'right' } : {},
  right: (
    size: SizeDimensions,
    overflow: OverflowDimensions,
    view: ViewDimensions
  ) =>
    overflow.right > view.width ? { left: size.left, mainAxis: 'left' } : {}
};

export const getFloatMainAxis = (
  mainAxis: MainAxis,
  float: Float,
  view: ViewDimensions,
  size: SizeDimensions,
  overflow: OverflowDimensions
) => (float !== 'none' ? dimensions[mainAxis](size, overflow, view) : {});
