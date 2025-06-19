import type { Variant, DefaultPlacement, Border } from '../../types';
import { getVariant } from './getVariant';
import { isPopperBordered } from './isPopperBordered';

export const getArrowVariant = (
  variant: Variant,
  placement: DefaultPlacement,
  border: Border
) =>
  isPopperBordered(placement, border)
    ? getVariant(variant)[1]
    : getVariant(variant)[0];
