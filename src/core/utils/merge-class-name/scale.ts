import type { Size, Scale } from '../../types';
import { isSpacingInner } from './spacing';

type GetScale = {
  size: 'normal' | 'square';
  padding: 'normal' | 'square' | 'inner-normal' | 'inner-square';
  isSquare: boolean;
};

export const getScale = (size: Size, scale: Scale): GetScale => {
  const padding =
    scale === 'circle' || scale === 'square' ? 'square' : 'normal';

  return {
    size: scale === 'square' ? 'square' : 'normal',
    padding: isSpacingInner(size) ? `inner-${padding}` : padding,
    isSquare: scale === 'square'
  };
};

export const getInputScale = (hasRipple: boolean) =>
  hasRipple ? 'normal' : 'text';
