import type { DefaultPlacement, MainAxis } from '../../../core/types';
import type { SizeDimension, AxisDimension } from './cords.types';

type DimensionMap = Record<
  DefaultPlacement,
  (size: SizeDimension) => AxisDimension
>;

const dimensionMap: DimensionMap = {
  top: (size): AxisDimension => ({ top: size.top }),
  bottom: (size): AxisDimension => ({ top: size.bottom }),
  left: (size): AxisDimension => ({ left: size.left }),
  right: (size): AxisDimension => ({ left: size.right })
};

export const getMainAxis = (
  mainAxis: MainAxis,
  size: SizeDimension
): AxisDimension => dimensionMap[mainAxis](size);
