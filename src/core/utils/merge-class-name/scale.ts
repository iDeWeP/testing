import type { DefaultSize, Size, Scale } from '../../types';
import { isSpacingInner, getDefaultSize } from './spacing';

type GetScale = {
  default: 'normal' | 'inner';
  dimension: 'normal' | 'square';
  size: string;
  padding: 'normal' | 'square' | 'inner-normal' | 'inner-square';
  font: DefaultSize;
  isSquare: boolean;
};

export const getScale = (size: Size, scale: Scale): GetScale => {
  const isInner = isSpacingInner(size);
  const defaultSize = getDefaultSize(size);
  const padding =
    scale === 'circle' || scale === 'square' ? 'square' : 'normal';

  return {
    default: isInner ? 'inner' : 'normal',
    dimension: scale === 'square' ? 'square' : 'normal',
    size: scale === 'none' ? 'unset' : defaultSize,
    padding: isInner ? `inner-${padding}` : padding,
    font: isInner ? 'xs' : defaultSize,
    isSquare: scale === 'square'
  };
};

export const getInputScale = (hasRipple: boolean) =>
  hasRipple ? 'normal' : 'text';
