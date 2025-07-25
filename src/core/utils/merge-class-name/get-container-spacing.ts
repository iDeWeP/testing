import type { Variant, Size, Scale, Border } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getDefaultSize } from './get-default-size';
import { isSpacingInner } from './is-spacing-inner';

type Spacing = {
  sizeType: 'default' | 'square';
  paddingType: 'rect' | 'square' | 'inner-rect' | 'inner-square';
  isSquare: boolean;
  size: string;
  padding: string;
};

export const getContainerSpacing = (
  variant: Variant,
  size: Size,
  scale: Scale,
  border: Border
): Spacing => {
  const paddingType = scale === 'default' ? 'rect' : 'square';
  const defaultSize = getDefaultSize(size);
  const autoPadding = isAutoBordered(variant, border)
    ? `${defaultSize}-${defaultSize}`
    : defaultSize;

  return {
    sizeType: scale === 'square' ? 'square' : 'default',
    paddingType: isSpacingInner(size) ? `inner-${paddingType}` : paddingType,
    isSquare: scale === 'square',
    size: scale === 'none' ? 'unset' : size,
    padding: scale === 'none' ? 'unset' : autoPadding
  };
};
