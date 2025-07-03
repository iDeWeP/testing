import type { Color, Variant } from '../../types';
import { hasVariantBg } from './variant';

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

  return variants[variant](getStateColor(color, isValid, isInvalid));
};

const getStateColor = (color: Color, isValid?: boolean, isInvalid?: boolean) =>
  isValid ? 'success' : isInvalid ? 'error' : color;
