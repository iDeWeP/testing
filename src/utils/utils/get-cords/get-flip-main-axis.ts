import type {
  DefaultPlacement,
  Collision,
  MainAxis
} from '../../../core/types';
import type {
  ViewDimension,
  SizeDimension,
  OverflowDimension
} from './cords.types';

type AxisDimension =
  | {
      top: number;
      mainAxis: DefaultPlacement;
    }
  | {
      left: number;
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
  top: (view, size, overflow) => {
    if (overflow.top < view.top) {
      return { top: size.bottom, mainAxis: 'bottom' };
    }
  },
  bottom: (view, size, overflow) => {
    if (overflow.bottom > view.bottom) {
      return { top: size.top, mainAxis: 'top' };
    }
  },
  left: (view, size, overflow) => {
    if (overflow.left < view.left) {
      return { left: size.left, mainAxis: 'right' };
    }
  },
  right: (view, size, overflow) => {
    if (overflow.right > view.right) {
      return { left: size.left, mainAxis: 'left' };
    }
  }
};

export const getFlipMainAxis = (
  collision: Collision,
  mainAxis: MainAxis,
  view: ViewDimension,
  size: SizeDimension,
  overflow: OverflowDimension
): AxisDimension | undefined => {
  if (collision !== 'none') {
    return dimensionMap[mainAxis](view, size, overflow);
  }
};
