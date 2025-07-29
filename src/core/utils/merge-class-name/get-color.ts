import type { Variant, Color } from '../../types';
import { hasVariantBg } from './has-variant-bg';
import { isColorReversed } from './is-color-reverser';

type States = {
  checked?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
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
  states: States = {}
): ColorType => {
  if (color === 'unset') {
    return {
      bg: 'unset',
      text: 'unset',
      ring: 'unset'
    };
  }

  const { checked, valid, invalid, disabled } = states;

  if (checked && disabled) {
    return {
      bg: hasVariantBg(variant) ? 'disabled' : 'none',
      text: hasVariantBg(variant) ? 'disabled-light' : 'disabled',
      ring: 'unset'
    };
  }

  if (disabled) {
    return {
      bg: hasVariantBg(variant) ? 'disabled-light' : 'none',
      text: 'disabled',
      ring: 'unset'
    };
  }

  const isUnchecked = checked === false;
  const autoVariant = isUnchecked && variant === 'solid' ? 'light' : variant;
  const autoColor = isUnchecked ? 'surface' : color.replace('-on', '');

  return variantMap[autoVariant](
    valid ? 'success' : invalid ? 'error' : autoColor,
    !isUnchecked && isColorReversed(color)
  );
};
