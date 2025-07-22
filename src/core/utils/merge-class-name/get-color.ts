import type { Variant, Color } from '../../types';
import { hasVariantBg } from './has-variant-bg';
import { isColorReversed } from './is-color-reverser';

type State = {
  disabled?: boolean;
  valid?: boolean;
  invalid?: boolean;
};

type ColorType = Record<'bg' | 'text' | 'ring', string>;

type VariantMap = Record<
  Variant,
  (color: string, isReversed: boolean) => ColorType
>;

const variantMap: VariantMap = {
  outlined: (color, isReversed): ColorType => ({
    bg: 'unset',
    text: isReversed ? `${color}-on` : color,
    ring: isReversed ? `${color}-on` : color
  }),
  text: (color, isReversed): ColorType => ({
    bg: 'unset',
    text: isReversed ? `${color}-on` : color,
    ring: isReversed ? `${color}-on` : color
  }),
  light: (color, isReversed): ColorType => ({
    bg: isReversed ? color : `${color}-light`,
    text: isReversed ? `${color}-light` : color,
    ring: isReversed ? `${color}-light` : color
  }),
  solid: (color, isReversed): ColorType => ({
    bg: isReversed ? `${color}-on` : color,
    text: isReversed ? color : `${color}-on`,
    ring: isReversed ? `${color}-on` : color
  })
};

export const getColor = (
  variant: Variant,
  color: Color,
  state?: State,
  isChecked?: boolean
): ColorType => {
  if (color === 'unset') {
    return {
      bg: 'unset',
      text: 'unset',
      ring: 'unset'
    };
  }

  if (isChecked === false && state?.disabled) {
    return {
      bg: hasVariantBg(variant) ? 'disabled-light' : 'none',
      text: hasVariantBg(variant) ? 'disabled' : 'disabled-light',
      ring: 'unset'
    };
  }

  if (isChecked && state?.disabled) {
    return {
      bg: hasVariantBg(variant) ? 'disabled' : 'none',
      text: hasVariantBg(variant) ? 'disabled-light' : 'disabled',
      ring: 'unset'
    };
  }

  if (state?.disabled) {
    return {
      bg: hasVariantBg(variant) ? 'disabled-light' : 'none',
      text: 'disabled',
      ring: 'unset'
    };
  }

  const isDefault = isChecked === false;
  const defaultVariant = hasVariantBg(variant) ? 'light' : 'text';
  const defaultColor = isDefault ? 'surface' : color.replace('-on', '');

  return variantMap[isDefault ? defaultVariant : variant](
    state?.valid ? 'success' : state?.invalid ? 'error' : defaultColor,
    !isDefault && isColorReversed(color)
  );
};
