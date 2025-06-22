import type { ButtonScale } from '../../types';

type SizeScale = 'normal' | 'square';
type SpacingScale = SizeScale | 'border' | 'border-square';

export const getButtonScale = (
  scale: ButtonScale,
  isBordered: boolean
): [SizeScale, SpacingScale] => {
  const sizeScale = scale === 'square' ? 'square' : 'normal';

  if (isBordered) {
    return [sizeScale, scale === 'square' ? 'border-square' : 'border'];
  }

  return [sizeScale, sizeScale];
};
