import type {
  Variant,
  DefaultPlacement,
  Border,
  DefaultBorder,
  Color
} from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getReversedColor } from './get-reversed-color';

export const getArrowColor = (
  variant: Variant,
  placement: DefaultPlacement,
  border: Border,
  bx: DefaultBorder,
  by: DefaultBorder,
  bt: DefaultBorder,
  bb: DefaultBorder,
  bl: DefaultBorder,
  br: DefaultBorder,
  color: Color
): string => {
  if (
    (placement === 'top' &&
      (bt === 'set' || (bt !== 'none' && by === 'set'))) ||
    (placement === 'bottom' &&
      (bb === 'set' || (bb !== 'none' && by === 'set'))) ||
    (placement === 'left' &&
      (bl === 'set' || (bl !== 'none' && bx === 'set'))) ||
    (placement === 'right' &&
      (br === 'set' || (br !== 'none' && bx === 'set'))) ||
    isAutoBordered(variant, border)
  ) {
    return getReversedColor(color);
  }

  return color;
};
