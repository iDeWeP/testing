import type { Variant, Color } from '../../types';
import { hasVariantBg } from './has-variant-bg';
import { isColorReversed } from './is-color-reverser';

type State = {
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
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
  states?: State,
  isChecked?: boolean
): string => {
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

  return variantMap[isDefault ? statefulVariant : variant](
    isDefault ? 'surface' : color.replace('-on', ''),
    !isDefault && isColorReversed(color)
  );
};
