import type {
  Color,
  Variant,
  InputVariant,
  DefaultPlacement,
  Border,
  DefaultBorder
} from '../../types';
import { hasVariantBg } from './variant';

const variants = {
  outlined: (color: string, isReversed: boolean) => ({
    bg: 'none',
    text: isReversed ? `${color}-on` : color
  }),
  text: (color: string, isReversed: boolean) => ({
    bg: 'none',
    text: isReversed ? `${color}-on` : color
  }),
  light: (color: string, isReversed: boolean) => ({
    bg: isReversed ? color : `${color}-light`,
    text: isReversed ? `${color}-light` : color
  }),
  solid: (color: string, isReversed: boolean) => ({
    bg: isReversed ? `${color}-on` : color,
    text: isReversed ? color : `${color}-on`
  })
};

const getStateColor = (color: Color, isValid?: boolean, isInvalid?: boolean) =>
  isValid ? 'success' : isInvalid ? 'error' : color.replace('-on', '');

const isColorReversed = (color: Color) => color.endsWith('-on');

export const getColor = (
  variant: Variant,
  color: Color,
  isDisabled?: boolean,
  isValid?: boolean,
  isInvalid?: boolean,
  checked?: boolean
) => {
  if (!checked && isDisabled) {
    return {
      bg:
        checked === false || hasVariantBg(variant) ? 'disabled-light' : 'none',
      text: 'disabled'
    };
  }

  if (checked && isDisabled) {
    return {
      bg: hasVariantBg(variant) ? 'disabled' : 'none',
      text: hasVariantBg(variant) ? 'disabled-on' : 'disabled'
    };
  }

  return variants[variant](
    getStateColor(color, isValid, isInvalid),
    isColorReversed(color)
  );
};

export const getDefaultColor = (color: Color) =>
  color === 'unset' ? 'unset' : 'surface';

export const getReversedColor = (color: Color) =>
  (isColorReversed(color) ? getStateColor(color) : `${color}-on`) as Color;

export const getCheckableColor = (color: Color, checked?: boolean) =>
  checked === false ? 'surface' : color;

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
    return getReversedColor(color);
  }

  return color;
};

export const getInputColor = (variant: InputVariant, isDisabled?: boolean) =>
  isDisabled
    ? 'disabled-light'
    : variant === 'light'
    ? 'surface-light'
    : 'none';

export const getRippleColor = (
  variant: Variant,
  color: Color,
  isValid?: boolean,
  isInvalid?: boolean
) =>
  variants[variant](
    getStateColor(color, isValid, isInvalid),
    isColorReversed(color)
  ).text;

export const getSpinnerColorType = (type: 'bar' | 'trail') =>
  type === 'bar' ? 'text' : 'bg';
