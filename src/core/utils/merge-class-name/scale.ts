import type { DefaultSize, Size, Scale } from '../../types';
import { getDefaultSize } from './spacing';

type GetScale = {
  defaultScale: 'normal' | 'inner';
  dimensionScale: 'normal' | 'square';
  sizeScale: string;
  paddingScale: 'normal' | 'square' | 'inner-normal' | 'inner-square';
  fontSize: DefaultSize;
  isSquare: boolean;
};

const isSizeInner = (size: Size) => size.includes('-');

export const getScale = (size: Size, scale: Scale): GetScale => {
  const isInner = isSizeInner(size);
  const defaultSize = getDefaultSize(size);
  const padding =
    scale === 'circle' || scale === 'square' ? 'square' : 'normal';

  return {
    defaultScale: isInner ? 'inner' : 'normal',
    dimensionScale: scale === 'square' ? 'square' : 'normal',
    sizeScale: scale === 'none' ? 'unset' : defaultSize,
    paddingScale: isInner ? `inner-${padding}` : padding,
    fontSize: isInner ? 'xs' : defaultSize,
    isSquare: scale === 'square'
  };
};

export const getInputScale = (hasRipple: boolean) =>
  hasRipple ? 'normal' : 'text';
