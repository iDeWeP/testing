import type { Variant, Size, Scale, Border } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { isSpacingInner } from './is-spacing-inner';

type GetContainerSpacing = {
  size: 'default' | 'square';
  scale: 'rect' | 'square' | 'inner-rect' | 'inner-square';
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
    scale === 'circle' || scale === 'square' ? 'square' : 'rect';

  return {
    size: scale === 'square' ? 'square' : 'default',
    scale: isSpacingInner(size) ? `inner-${padding}` : padding,
    isSquare: scale === 'square',
    all: setSize(isAutoBordered(variant, border), size.split('-')[0])
  };
};
