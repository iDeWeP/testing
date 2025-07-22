import type { Orientation, Spacing } from '../../types';
import { getClass } from './get-class';

type SpacingType = Record<'x' | 'y', string>;

export const getDividerSpacing = (
  orientation: Orientation,
  spacing: Spacing
): SpacingType => ({
  x: getClass(orientation === 'row', spacing),
  y: getClass(orientation === 'col', spacing)
});
