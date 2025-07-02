import type { Orientation } from '../../types';

export const getDirection = (orientation: Orientation) =>
  orientation === 'horizontal' ? 'row' : 'col';
