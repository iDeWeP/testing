import type { Spacing, CardPlacement } from '../../types';
import { getClass } from './get-class';
import { isSpacingInner } from './is-spacing-inner';

type SpacingType = Record<'all' | 'x' | 'y' | 't' | 'b', string>;

export const getSpacing = (
  spacing: Spacing,
  placement?: CardPlacement
): SpacingType => {
  const isDefaultPlacement = !placement || placement === 'default';
  const isSquare = !isSpacingInner(spacing) && isDefaultPlacement;

  return {
    all: getClass(isSquare, spacing),
    x: getClass(!isSquare, spacing.split('-')[0]),
    y: getClass(!isSquare && isDefaultPlacement, spacing),
    t: getClass(!isSquare && placement === 'top', spacing),
    b: getClass(!isSquare && placement === 'bottom', spacing)
  };
};
