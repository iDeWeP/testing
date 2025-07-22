import type { Border, Variant, CardPlacement } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getClass } from './get-class';

export const getBorder = (
  variant: Variant,
  border: Border,
  placement?: CardPlacement
): Record<'all' | 'x' | 't' | 'b', Border> => {
  const isDefaultPlacement = !placement || placement === 'default';
  const defaultBorder = isAutoBordered(variant, border) ? 'set' : border;

  return {
    all: getClass(isDefaultPlacement, defaultBorder),
    x: getClass(!isDefaultPlacement, defaultBorder),
    t: getClass(placement === 'top', defaultBorder),
    b: getClass(placement === 'bottom', defaultBorder)
  };
};
