import type {
  DefaultSize,
  Padding,
  Size,
  Variant,
  Scale,
  Border,
  DefaultBorder,
  Orientation,
  InputSize
} from '../../types';

const setSize = (condition: boolean, size: DefaultSize) =>
  condition ? `${size}-${size}` : size;

const setSpacing = (condition: boolean, padding: Padding) =>
  condition ? padding : 'unset';

export const getDefaultSize = (size: Size) => size.split('-')[0] as DefaultSize;

export const getInnerSize = (size: DefaultSize) => `${size}-${size}` as Size;

export const getFontSize = (size: Size) => {
  const sizes = size.split('-');

  return sizes.length === 2 ? 'xs' : sizes[0];
};

export const getContainerPadding = (
  variant: Variant,
  size: Size,
  scale: Scale,
  border: Border,
  b: Border,
  bx: DefaultBorder,
  by: DefaultBorder,
  bt: DefaultBorder,
  bb: DefaultBorder,
  bl: DefaultBorder,
  br: DefaultBorder
) => {
  const defaultSize = getDefaultSize(size);
  const isBordered =
    (variant === 'outlined' && border === 'auto') ||
    border === 'set' ||
    b === 'set';

  const x =
    scale === 'none' ||
    (bl === 'set' && br !== 'set' && !isBordered) ||
    (bl !== 'set' && br === 'set' && !isBordered)
      ? 'unset'
      : setSize(isBordered || bx === 'set', defaultSize);

  const y =
    scale === 'none' ||
    (bt === 'set' && bb !== 'set' && !isBordered) ||
    (bt !== 'set' && bb === 'set' && !isBordered)
      ? 'unset'
      : setSize(isBordered || by === 'set', defaultSize);

  const isXSet = x === 'unset' && scale !== 'none';
  const isYSet = y === 'unset' && scale !== 'none';

  return {
    x,
    y,
    t: isYSet ? setSize(bt === 'set', defaultSize) : 'unset',
    b: isYSet ? setSize(bb === 'set', defaultSize) : 'unset',
    l: isXSet ? setSize(bl === 'set', defaultSize) : 'unset',
    r: isXSet ? setSize(br === 'set', defaultSize) : 'unset'
  };
};

export const getDividerPadding = (
  orientation: Orientation,
  padding: Padding
) => ({
  x: setSpacing(orientation === 'row', padding),
  y: setSpacing(orientation === 'col', padding)
});

export const getInputSize = (size: InputSize, resize: boolean) =>
  resize ? 'full' : size;

export const getInputSpacing = (decorated: boolean) =>
  decorated ? 'decorated' : 'default';
