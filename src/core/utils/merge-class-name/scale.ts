import type { ButtonScale, Border } from '../../types';

type GetButtonReturn = {
  sizeScale: 'normal' | 'square';
  spacingScale: 'normal' | 'square' | 'border' | 'border-square';
};

export const getButtonScale = (
  scale: ButtonScale,
  border: Border
): GetButtonReturn => {
  const sizeScale = scale === 'square' ? 'square' : 'normal';
  const spacingScale = scale === 'square' ? 'border-square' : 'border';

  return { sizeScale, spacingScale: border ? spacingScale : sizeScale };
};

export const getInputScale = (hasRipple: boolean) =>
  hasRipple ? 'normal' : 'text';
