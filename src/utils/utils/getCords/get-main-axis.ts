import type { MainAxis } from '../../../core/types';
import type { SizeDimensions } from './cords.types';

const dimensions = {
  top: (size: SizeDimensions) => ({ top: size.top }),
  bottom: (size: SizeDimensions) => ({ top: size.bottom }),
  left: (size: SizeDimensions) => ({ left: size.left }),
  right: (size: SizeDimensions) => ({ left: size.right })
};

export const getMainAxis = (mainAxis: MainAxis, size: SizeDimensions) =>
  dimensions[mainAxis](size);
