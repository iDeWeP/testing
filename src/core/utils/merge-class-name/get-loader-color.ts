import type { Variant, Color } from '../../types';
import { hasVariantBg } from './has-variant-bg';
import { isColorReversed } from './is-color-reverser';

type States = {
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
};

type VariantMap = Record<
  Variant,
  (color: string, isReversed: boolean) => string
>;

export const variantMap: VariantMap = {
  outlined: (color, isReversed): string => (isReversed ? `${color}-on` : color),
  text: (color, isReversed): string => (isReversed ? `${color}-on` : color),
  light: (color, isReversed): string => (isReversed ? `${color}-light` : color),
  solid: (color, isReversed): string => (isReversed ? color : `${color}-on`)
};

export const getLoaderColor = (
  variant: Variant,
  color: Color,
  states: States = {},
  isChecked?: boolean
): string => {
  if (color === 'unset') {
    return 'unset';
  }

  const { valid, invalid, disabled } = states;

  if (isChecked === false && disabled) {
    return hasVariantBg(variant) ? 'disabled' : 'disabled-light';
  }

  if (isChecked && disabled) {
    return hasVariantBg(variant) ? 'disabled-light' : 'disabled';
  }

  if (disabled) {
    return 'disabled';
  }

  const isUnchecked = isChecked === false;
  const statefulVariant = hasVariantBg(variant) ? 'light' : 'text';
  const defaultColor = isUnchecked ? 'surface' : color.replace('-on', '');

  return variantMap[isUnchecked ? statefulVariant : variant](
    valid ? 'success' : invalid ? 'error' : defaultColor,
    !isUnchecked && isColorReversed(color)
  );
};
