import type { ButtonScale } from '../../types';

export const getButtonSpacingScale = (scale: ButtonScale, isBordered: boolean) => {
  if(isBordered) {
    return scale === 'square' ? 'border-square' : 'border';
  }

  return scale === 'square' ? 'square' : 'normal';
}
  
