import type { ButtonScale } from '../../types';

type GetButtonReturn = {
  sizeScale: 'normal' | 'square';
  spacingScale: 'normal' | 'square' | 'border' | 'border-square';
};

export const getButtonScale = (
  scale: ButtonScale,
  isBordered: boolean
): GetButtonReturn => {
  const sizeScale = scale === 'square' ? 'square' : 'normal';
  const spacingScale = scale === 'square' ? 'border-square' : 'border';

  return { sizeScale, spacingScale: isBordered ? spacingScale : sizeScale };
};
