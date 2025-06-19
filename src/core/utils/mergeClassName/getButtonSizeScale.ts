import type { ButtonScale } from '../../types';

export const getButtonSizeScale = (scale: ButtonScale) =>
  scale === 'square' ? 'square' : 'normal';
