import type { CardPlacement, Variant, Border } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getClass } from './get-class';

type Props = {
  isChecked?: boolean;
  placement?: CardPlacement;
};

export const getBorder = (
  variant: Variant,
  border: Border,
  props: Props = {}
): Record<'all' | 'x' | 't' | 'b', Border> => {
  const { isChecked, placement } = props;
  const isDefaultPlacement = !placement || placement === 'default';
  const defaultBorder = isAutoBordered(variant, border, isChecked)
    ? 'set'
    : border;

  return {
    all: getClass(isDefaultPlacement, defaultBorder),
    x: getClass(!isDefaultPlacement, defaultBorder),
    t: getClass(placement === 'top', defaultBorder),
    b: getClass(placement === 'bottom', defaultBorder)
  };
};
