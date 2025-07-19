import type { Orientation, Spacing } from '../../types';
import { getClass } from './get-class';

export const getDividerSpacing = (
  orientation: Orientation,
  spacing: Spacing
) => ({
  x: getClass(orientation === 'row', spacing),
  y: getClass(orientation === 'col', spacing)
});
