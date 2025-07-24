import type { Variant, Size, Scale, Border } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getDefaultSize } from './get-default-size';
import { isSpacingInner } from './is-spacing-inner';

type Spacing = {
  size: 'default' | 'square';
  scale: 'rect' | 'square' | 'inner-rect' | 'inner-square';
  isSquare: boolean;
  all: string;
};

export const getContainerSpacing = (
  variant: Variant,
  size: Size,
  scale: Scale,
  border: Border
): Spacing => {
  const paddingScale = scale === 'default' ? 'rect' : 'square';
  const defaultSize = getDefaultSize(size);

  return {
    size: scale === 'square' ? 'square' : 'default',
    scale: isSpacingInner(size) ? `inner-${paddingScale}` : paddingScale,
    isSquare: scale === 'square',
    all: isAutoBordered(variant, border)
      ? `${defaultSize}-${defaultSize}`
      : defaultSize
  };
};
