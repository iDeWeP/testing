import type {
  Variant,
  Border,
  CardPlacement,
  DefaultBorder
} from '../../types';
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

export const isBordered = (
  border: Border,
  b: DefaultBorder,
  bx: DefaultBorder,
  by: DefaultBorder,
  bt: DefaultBorder,
  bb: DefaultBorder,
  bl: DefaultBorder,
  br: DefaultBorder,
  variant?: Variant
) =>
  (variant === 'outlined' && border === 'auto') ||
  border === 'set' ||
  b === 'set' ||
  bx === 'set' ||
  by === 'set' ||
  bt === 'set' ||
  bb === 'set' ||
  bl === 'set' ||
  br === 'set';
