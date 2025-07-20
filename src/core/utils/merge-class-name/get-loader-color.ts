import type { Variant, Color } from '../../types';
import { hasVariantBg } from './has-variant-bg';

type States = {
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
};

export const variants = {
  outlined: (color: string, isReversed?: boolean) =>
    isReversed ? `${color}-on` : color,
  text: (color: string, isReversed?: boolean) =>
    isReversed ? `${color}-on` : color,
  light: (color: string, isReversed?: boolean) =>
    isReversed ? `${color}-light` : color,
  solid: (color: string, isReversed?: boolean) =>
    isReversed ? color : `${color}-on`
};

export const getLoaderColor = (
  variant: Variant,
  color: Color,
  states?: States,
  isChecked?: boolean
) => {
  if (color === 'unset') {
    return 'unset';
  }

  if (isChecked === false && states?.disabled) {
    return hasVariantBg(variant) ? 'disabled' : 'disabled-light';
  }

  if (isChecked && states?.disabled) {
    return hasVariantBg(variant) ? 'disabled-light' : 'disabled';
  }

  if (states?.disabled) {
    return 'disabled';
  }

  const isDefault = isChecked === false;
  const statefulVariant = hasVariantBg(variant) ? 'light' : 'text';

  return variants[isDefault ? statefulVariant : variant](
    isDefault ? 'surface' : color.replace('-on', ''),
    isDefault && color.endsWith('-on')
  );
};
