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
  const autoBorder = isAutoBordered(variant, border, isChecked)
    ? 'set'
    : border;

  return {
    all: getClass(isDefaultPlacement, autoBorder),
    x: getClass(!isDefaultPlacement, autoBorder),
    t: getClass(placement === 'top', autoBorder),
    b: getClass(placement === 'bottom', autoBorder)
  };
};
