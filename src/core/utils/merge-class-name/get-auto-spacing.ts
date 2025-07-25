import type { Variant, Size, Scale, Border } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getDefaultSize } from './get-default-size';
import { isSpacingInner } from './is-spacing-inner';

type AutoSpacing = {
  sizeScale: 'default' | 'square';
  paddingScale: 'rect' | 'square' | 'inner-rect' | 'inner-square';
  isSquare: boolean;
  size: string;
  padding: string;
};

export const getAutoSpacing = (
  variant: Variant,
  size: Size,
  scale: Scale,
  border: Border
): AutoSpacing => {
  const paddingScale = scale === 'default' ? 'rect' : 'square';
  const defaultSize = getDefaultSize(size);
  const autoPadding = isAutoBordered(variant, border)
    ? `${defaultSize}-${defaultSize}`
    : defaultSize;

  return {
    sizeScale: scale === 'square' ? 'square' : 'default',
    paddingScale: isSpacingInner(size) ? `inner-${paddingScale}` : paddingScale,
    isSquare: scale === 'square',
    size: scale === 'none' ? 'unset' : size,
    padding: scale === 'none' ? 'unset' : autoPadding
  };
};
