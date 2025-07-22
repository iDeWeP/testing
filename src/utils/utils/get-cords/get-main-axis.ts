import type { MainAxis } from '../../../core/types';
import type { SizeDimension } from './cords.types';

type Axis = { left: number } | { top: number };

const dimensionMap = {
  top: (size: SizeDimension) => ({ top: size.top }),
  bottom: (size: SizeDimension) => ({ top: size.bottom }),
  left: (size: SizeDimension) => ({ left: size.left }),
  right: (size: SizeDimension) => ({ left: size.right })
};

export const getMainAxis = (mainAxis: MainAxis, size: SizeDimension): Axis =>
  dimensionMap[mainAxis](size);
