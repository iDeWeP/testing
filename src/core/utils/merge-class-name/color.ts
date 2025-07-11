import type {
  Color,
  Variant,
  TrailColor,
  InputVariant,
  DefaultPlacement,
  Border,
  DefaultBorder
} from '../../types';
import { hasVariantBg } from './variant';

const getStateColor = (color: Color, isValid?: boolean, isInvalid?: boolean) =>
  isValid ? 'success' : isInvalid ? 'error' : color.replace('-on', '');

const isColorReversed = (color: Color) => color.endsWith('-on');

const variants = {
  outlined: (color: string, isReversed: boolean) => ({
    bgColor: 'none',
    textColor: isReversed ? `${color}-on` : color
  }),
  text: (color: string, isReversed: boolean) => ({
    bgColor: 'none',
    textColor: isReversed ? `${color}-on` : color
  }),
  light: (color: string, isReversed: boolean) => ({
    bgColor: isReversed ? color : `${color}-light`,
    textColor: isReversed ? `${color}-light` : color
  }),
  solid: (color: string, isReversed: boolean) => ({
    bgColor: isReversed ? `${color}-on` : color,
    textColor: isReversed ? color : `${color}-on`
  })
};

export const getColor = (
  variant: Variant,
  color: Color,
  isDisabled?: boolean,
  isValid?: boolean,
  isInvalid?: boolean,
  checked?: boolean
) => {
  if (isDisabled && !checked) {
    return {
      bgColor:
        checked === false || hasVariantBg(variant) ? 'disabled-light' : 'none',
      textColor: 'disabled'
    };
  }

  if (isDisabled && checked) {
    return {
      bgColor: hasVariantBg(variant) ? 'disabled' : 'none',
      textColor: hasVariantBg(variant) ? 'disabled-on' : 'disabled'
    };
  }

  return variants[variant](
    getStateColor(color, isValid, isInvalid),
    isColorReversed(color)
  );
};

export const getRippleColor = (
  variant: Variant,
  color: Color,
  isValid?: boolean,
  isInvalid?: boolean
) =>
  variants[variant](
    getStateColor(color, isValid, isInvalid),
    isColorReversed(color)
  ).textColor;

export const getDefaultColor = (color: TrailColor) =>
  color === 'unset' ? 'unset' : 'surface';

export const getInputColor = (variant: InputVariant, isDisabled?: boolean) =>
  isDisabled
    ? 'disabled-light'
    : variant === 'light'
    ? 'surface-light'
    : 'none';

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
    return isColorReversed(color) ? getStateColor(color) : `${color}-on`;
  }

  return color;
};

export const getSpinnerColorType = (type: 'bar' | 'trail') =>
  type === 'bar' ? 'textColor' : 'bgColor';
