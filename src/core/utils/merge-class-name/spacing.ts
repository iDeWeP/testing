import type {
  InputSize,
  Size,
  Variant,
  Border,
  DefaultBorder,
  Scale
} from '../../types';

export const getInputSize = (size: InputSize, resize: boolean) =>
  resize ? 'full' : size;

export const getInputSpacing = (decorated: boolean) =>
  decorated ? 'decorated' : 'default';

const setSize = (condition: boolean, size: Size) =>
  condition ? `${size}-${size}` : size;

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

  const x =
    (bl === 'set' && br !== 'set' && !isBordered) ||
    (bl !== 'set' && br === 'set' && !isBordered)
      ? 'unset'
      : setSize(isBordered || bx === 'set', size);

  const y =
    (bt === 'set' && bb !== 'set' && !isBordered) ||
    (bt !== 'set' && bb === 'set' && !isBordered)
      ? 'unset'
      : setSize(isBordered || by === 'set', size);

  return {
    x,
    y,
    t: y === 'unset' ? setSize(bt === 'set', size) : 'unset',
    b: y === 'unset' ? setSize(bb === 'set', size) : 'unset',
    l: x === 'unset' ? setSize(bl === 'set', size) : 'unset',
    r: x === 'unset' ? setSize(br === 'set', size) : 'unset'
  };
};

export const getDefaultScale = (scale: Scale) =>
  scale === 'normal' || scale === 'square' ? 'normal' : 'inner';

export const getSizeScale = (scale: Scale) =>
  scale === 'normal' || scale === 'inner' ? 'normal' : 'square';
