import type { Spacing, CardPlacement } from '../../types';
import { getClass } from './get-class';
import { isSpacingInner } from './is-spacing-inner';

export const getSpacing = (spacing: Spacing, placement?: CardPlacement) => {
  const isDefaultPlacement = !placement || placement === 'none';
  const isSquare = !isSpacingInner(spacing) && isDefaultPlacement;

  return {
    all: getClass(isSquare, spacing),
    x: getClass(!isSquare, spacing.split('-')[0]),
    y: getClass(!isSquare && isDefaultPlacement, spacing),
    b: getClass(!isSquare && placement === 'bottom', spacing),
    t: getClass(!isSquare && placement === 'top', spacing)
  };
};
