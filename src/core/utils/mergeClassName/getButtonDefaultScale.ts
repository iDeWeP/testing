import type { ButtonScale } from '../../types';

export const getButtonDefaultScale = (scale: ButtonScale) =>
  scale === 'square' ? 'normal' : scale;
