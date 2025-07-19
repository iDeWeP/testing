import type { Variant, Border, CardPlacement } from '../../types';
import { setClass } from '../set-class/set-class';

export const getBorder = (
  variant: Variant,
  border: Border,
  placement?: CardPlacement
) => {
  const isDefaultPlacement = !placement || placement === 'none';
  const defaultBorder =
    variant === 'outlined' && border === 'auto' ? 'set' : border;

  return {
    all: setClass(isDefaultPlacement, defaultBorder),
    x: setClass(!isDefaultPlacement, defaultBorder),
    t: setClass(placement === 'top', defaultBorder),
    b: setClass(placement === 'bottom', defaultBorder)
  };
};
