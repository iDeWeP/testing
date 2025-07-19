import type { Spacing, CardPlacement } from '../../types';
import { setClass } from '../set-class/set-class';
import { isSpacingInner } from './is-spacing-inner';

export const getSpacing = (spacing: Spacing, placement?: CardPlacement) => {
  const isDefaultPlacement = !placement || placement === 'none';
  const isSquare = !isSpacingInner(spacing) && isDefaultPlacement;

  return {
    all: setClass(isSquare, spacing),
    x: setClass(!isSquare, spacing.split('-')[0]),
    y: setClass(!isSquare && isDefaultPlacement, spacing),
    b: setClass(!isSquare && placement === 'bottom', spacing),
    t: setClass(!isSquare && placement === 'top', spacing)
  };
};
