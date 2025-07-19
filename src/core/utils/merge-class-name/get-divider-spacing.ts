import type { Orientation, Spacing } from '../../types';
import { setClass } from '../set-class/set-class';

export const getDividerSpacing = (
  orientation: Orientation,
  spacing: Spacing
) => ({
  x: setClass(orientation === 'row', spacing),
  y: setClass(orientation === 'col', spacing)
});
