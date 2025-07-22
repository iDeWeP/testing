import type { Variant, Border, CardPlacement } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getClass } from './get-class';

type BorderType = {
  all: Border;
  x: Border;
  t: Border;
  b: Border;
};

export const getBorder = (
  variant: Variant,
  border: Border,
  placement?: CardPlacement
): BorderType => {
  const isDefaultPlacement = !placement || placement === 'default';
  const defaultBorder = isAutoBordered(variant, border) ? 'set' : border;

  return {
    all: getClass(isDefaultPlacement, defaultBorder),
    x: getClass(!isDefaultPlacement, defaultBorder),
    t: getClass(placement === 'top', defaultBorder),
    b: getClass(placement === 'bottom', defaultBorder)
  };
};   
