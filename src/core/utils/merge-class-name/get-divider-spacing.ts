import type { Orientation, Spacing } from '../../types';
import { getClass } from './get-class';

type SpacingType = {
  x: string | 'unset';
  y: string | 'unset';
};

export const getDividerSpacing = (
  orientation: Orientation,
  spacing: Spacing
): SpacingType => ({
  x: getClass(orientation === 'row', spacing),
  y: getClass(orientation === 'col', spacing)
});
