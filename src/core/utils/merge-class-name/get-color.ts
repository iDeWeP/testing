import type { Color } from '../../types';

export const getColor = (isDisabled: boolean, color: Color) =>
  isDisabled ? 'disabled' : color;
