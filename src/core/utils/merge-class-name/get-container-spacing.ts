import type { Variant, Size, Scale, Border } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { isSpacingInner } from './is-spacing-inner';

type GetContainerSpacing = {
  size: 'normal' | 'square';
  scale: 'normal' | 'square' | 'inner-normal' | 'inner-square';
  isSquare: boolean;
  all: string;
};

const setSize = (condition: boolean, size: string) =>
  condition ? `${size}-${size}` : size;

export const getContainerSpacing = (
  variant: Variant,
  size: Size,
  scale: Scale,
  border: Border
): GetContainerSpacing => {
  const padding =
    scale === 'circle' || scale === 'square' ? 'square' : 'normal';

  return {
    size: scale === 'square' ? 'square' : 'normal',
    scale: isSpacingInner(size) ? `inner-${padding}` : padding,
    isSquare: scale === 'square',
    all: setSize(isAutoBordered(variant, border), size.split('-')[0])
  };
};
