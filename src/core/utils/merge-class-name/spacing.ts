import type {
  InputSize,
  Size,
  Variant,
  Border,
  DefaultBorder
} from '../../types';

export const getInputSize = (size: InputSize, resize: boolean) =>
  resize ? 'full' : size;

export const getInputSpacing = (decorated: boolean) =>
  decorated ? 'decorated' : 'default';

const setSize = (condition: boolean, size: Size) =>
  condition ? `b-${size}-${size}` : `${size}-${size}`;

export const getPadding = (
  variant: Variant,
  size: Size,
  border: Border,
  bx: DefaultBorder,
  by: DefaultBorder,
  bt: DefaultBorder,
  bb: DefaultBorder,
  bl: DefaultBorder,
  br: DefaultBorder
) => {
  const isBordered =
    (variant === 'outlined' && border === 'auto') || border === 'set';

  return {
    x:
      (bl === 'set' && br !== 'set' && !isBordered) ||
      (bl !== 'set' && br === 'set' && !isBordered)
        ? 'unset'
        : setSize(isBordered || bx === 'set', size),
    y:
      (bt === 'set' && bb !== 'set' && !isBordered) ||
      (bt !== 'set' && bb === 'set' && !isBordered)
        ? 'unset'
        : setSize(isBordered || by === 'set', size),
    t: setSize(bt === 'set' || (isBordered && bt === 'none'), size),
    b: setSize(bb === 'set' || (isBordered && bb === 'none'), size),
    l: setSize(bl === 'set' || (isBordered && bl === 'none'), size),
    r: setSize(br === 'set' || (isBordered && br === 'none'), size)
  };
};
