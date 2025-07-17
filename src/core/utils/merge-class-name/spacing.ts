import type {
  Padding,
  DefaultSize,
  CardPlacement,
  Size,
  Font,
  Variant,
  Scale,
  Border,
  DefaultBorder,
  Orientation,
  InputSize
} from '../../types';
import { setClass } from '../set-class/set-class';

type Spacing = Padding;

const setSize = (condition: boolean, size: DefaultSize) =>
  condition ? `${size}-${size}` : size;

export const getSpacing = (spacing: Spacing, placement?: CardPlacement) => {
  const isDefaultPlacement = !placement || placement === 'none';
  const isSquare = !isSpacingInner(spacing) && isDefaultPlacement;

  return {
    all: setClass(isSquare, spacing),
    x: setClass(!isSquare, getDefaultSpacing(spacing)),
    y: setClass(!isSquare && isDefaultPlacement, spacing),
    b: setClass(!isSquare && placement === 'bottom', spacing),
    t: setClass(!isSquare && placement === 'top', spacing)
  };
};

export const isSpacingInner = (spacing: Spacing) => spacing.includes('-');

export const getDefaultSize = (size: Size) => size.split('-')[0] as DefaultSize;

export const getReversedFont = (font: Font) => {
  const fonts = font.split('-');

  return (fonts.length === 2 ? fonts[0] : `${font}-${font}`) as Font;
};

export const getDefaultSpacing = (spacing: Spacing) =>
  spacing.split('-')[0] as Spacing;

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

export const getDividerSpacing = (
  orientation: Orientation,
  spacing: Spacing
) => ({
  x: setClass(orientation === 'row', spacing),
  y: setClass(orientation === 'col', spacing)
});

export const getInputSize = (size: InputSize, resize: boolean) =>
  resize ? 'full' : size;

export const getInputSpacing = (decorated: boolean) =>
  decorated ? 'decorated' : 'default';

export const setSpinnerSize = (size: Size) =>
  isSpacingInner(size) ? 'xs' : (`${size}-${size}` as Size);
