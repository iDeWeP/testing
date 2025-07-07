import type { Color, Variant } from '../../types';
import { hasVariantBg } from './variant';

const _getStateColor = (color: Color, isValid?: boolean, isInvalid?: boolean) =>
  isValid ? 'success' : isInvalid ? 'error' : color;

const variants = {
  plain: (color: Color) => ({
    bgColor: 'none',
    textColor: `${color}-on`
  }),
  text: (color: Color) => ({
    bgColor: 'none',
    textColor: color
  }),
  light: (color: Color) => ({
    bgColor: `${color}-light`,
    textColor: color
  }),
  surface: (color: Color) => ({
    bgColor: `${color}-on`,
    textColor: color
  }),
  solid: (color: Color) => ({
    bgColor: color,
    textColor: `${color}-on`
  })
};

export const getColor = (
  variant: Variant,
  color: Color,
  isDisabled?: boolean,
  isValid?: boolean,
  isInvalid?: boolean
) => {
  if (isDisabled) {
    return {
      bgColor: hasVariantBg(variant) ? 'disabled-light' : 'none',
      textColor: 'disabled'
    };
  }

  return variants[variant](_getStateColor(color, isValid, isInvalid));
};

export const getRippleColor = (
  variant: Variant,
  color: Color,
  isValid?: boolean,
  isInvalid?: boolean
) =>
  variants[variant === 'plain' || variant === 'surface' ? 'plain' : 'text'](
    _getStateColor(color, isValid, isInvalid)
  ).textColor;

export const getStateColor = (color: Color) =>
  color === 'unset' ? 'unset' : 'surface';
