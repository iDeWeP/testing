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
    ring: 'unset'
  }),
  text: (color: string, isReversed?: boolean) => ({
    bg: 'unset',
    text: isReversed ? `${color}-on` : color,
    ring: 'unset'
  }),
  light: (color: string, isReversed?: boolean) => ({
    bg: isReversed ? color : `${color}-light`,
    text: isReversed ? `${color}-light` : color,
    ring: isReversed ? color : `${color}-light`
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
  isDefault?: boolean
) => {
  if (color === 'unset') {
    return {
      bg: 'unset',
      text: 'unset',
      ring: 'unset'
    };
  }

  if (isDefault === false && states?.disabled) {
    return {
      bg: hasVariantBg(variant) ? 'disabled' : 'none',
      text: hasVariantBg(variant) ? 'disabled-on' : 'disabled',
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

  const statefulVariant = hasVariantBg(variant) ? 'light' : 'text';
  const statefulColor = isDefault ? 'surface' : color.replace('-on', '');

  return variants[isDefault ? statefulVariant : variant](
    states?.valid ? 'success' : states?.invalid ? 'error' : statefulColor,
    !isDefault && color.endsWith('-on')
  );
};
