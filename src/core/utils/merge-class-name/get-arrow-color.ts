import type {
  Variant,
  DefaultPlacement,
  Border,
  DefaultBorder,
  Color
} from '../../types';
import { setReversedColor } from '../set-reversed-color.ts/set-reversed-color';

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
) => {
  if (
    (placement === 'top' &&
      (bt === 'set' || (bt !== 'none' && by === 'set'))) ||
    (placement === 'bottom' &&
      (bb === 'set' || (bb !== 'none' && by === 'set'))) ||
    (placement === 'left' &&
      (bl === 'set' || (bl !== 'none' && bx === 'set'))) ||
    (placement === 'right' &&
      (br === 'set' || (br !== 'none' && bx === 'set'))) ||
    (variant === 'outlined' && border === 'auto') ||
    border === 'set'
  ) {
    return setReversedColor(color);
  }

  return color;
};
