import type {
  DefaultSize,
  Variant,
  Size,
  Scale,
  Border,
  DefaultBorder
} from '../../types';
import { getDefaultSize } from './get-default-size';

const setSize = (condition: boolean, size: DefaultSize) =>
  condition ? `${size}-${size}` : size;

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
