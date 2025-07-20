import type { Variant, Color } from '../../types';
import { hasVariantBg } from './has-variant-bg';

type States = {
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
};

const variants = {
  outlined: (color: string, isReversed?: boolean) => ({
    bg: 'unset',
    text: isReversed ? `${color}-on` : color,
    ring: isReversed ? `${color}-on` : color
  }),
  text: (color: string, isReversed?: boolean) => ({
    bg: 'unset',
    text: isReversed ? `${color}-on` : color,
    ring: isReversed ? `${color}-on` : color
  }),
  light: (color: string, isReversed?: boolean) => ({
    bg: isReversed ? color : `${color}-light`,
    text: isReversed ? `${color}-light` : color,
    ring: isReversed ? `${color}-light` : color
  }),
  solid: (color: string, isReversed?: boolean) => ({
    bg: isReversed ? `${color}-on` : color,
    text: isReversed ? color : `${color}-on`,
    ring: isReversed ? `${color}-on` : color
  })
};

export const getColor = (
  variant: Variant,
  color: Color,
  states?: States,
  isChecked?: boolean
) => {
  if (color === 'unset') {
    return {
      bg: 'unset',
      text: 'unset',
      ring: 'unset'
    };
  }

  if (isChecked === false && states?.disabled) {
    return {
      bg: hasVariantBg(variant) ? 'disabled-light' : 'none',
      text: hasVariantBg(variant) ? 'disabled' : 'disabled-light',
      ring: 'unset'
    };
  }

  if (isChecked && states?.disabled) {
    return {
      bg: hasVariantBg(variant) ? 'disabled' : 'none',
      text: hasVariantBg(variant) ? 'disabled-light' : 'disabled',
      ring: 'unset'
    };
  }

  if (states?.disabled) {
    return {
      bg: hasVariantBg(variant) ? 'disabled-light' : 'none',
      text: 'disabled',
      ring: 'unset'
    };
  }

  const isDefault = isChecked === false;
  const defaultVariant = hasVariantBg(variant) ? 'light' : 'text';
  const defaultColor = isDefault ? 'surface' : color.replace('-on', '');

  return variants[isDefault ? defaultVariant : variant](
    states?.valid ? 'success' : states?.invalid ? 'error' : defaultColor,
    isDefault && color.endsWith('-on')
  );
};
