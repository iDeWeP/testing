import type { DefaultPlacement, MainAxis } from '../../../core/types';
import type { SizeDimension, AxisDimension } from './cords.types';

type DimensionMap = Record<
  DefaultPlacement,
  (size: SizeDimension) => AxisDimension
>;

const dimensionMap: DimensionMap = {
  top: (size) => ({ top: size.top }),
  bottom: (size) => ({ top: size.bottom }),
  left: (size) => ({ left: size.left }),
  right: (size) => ({ left: size.right })
};

export const getMainAxis = (
  mainAxis: MainAxis,
  size: SizeDimension
): AxisDimension => dimensionMap[mainAxis](size);
