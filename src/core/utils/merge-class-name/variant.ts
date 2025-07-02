import type {
  Variant,
  InputVariant,
  DefaultInputVariant,
  DefaultPlacement,
  Border
} from '../../types';
import { isPopperBordered } from './border';

const variants = {
  none: { bgVariant: 'none', textVariant: 'none' },
  plain: { bgVariant: 'none', textVariant: 'on' },
  text: { bgVariant: 'none', textVariant: 'default' },
  light: { bgVariant: 'light', textVariant: 'default' },
  surface: { bgVariant: 'on', textVariant: 'default' },
  solid: { bgVariant: 'default', textVariant: 'on' }
};

export const getVariant = (variant: Variant, isDisabled?: boolean) =>
  isDisabled
    ? { ...variants[getDisabledVariant(variant)] }
    : { ...variants[variant] };

export const getRingVariant = (variant: Variant, isDisabled?: boolean) =>
  isDisabled ? 'none' : getVariant(variant).textVariant;

export const getInputVariant = (
  variant: InputVariant,
  isDisabled?: boolean,
  valid?: boolean,
  invalid?: boolean
) => {
  const variants = variant.split('-');
  const textVariant = variants[1] === 'plain' ? 'on' : 'default';

  return {
    textVariant,
    variant: variants[0] as DefaultInputVariant,
    bgVariant: isDisabled || variants[0] === 'light' ? 'light' : 'none',
    focusedVariant: isDisabled || valid || invalid ? 'none' : textVariant
  };
};

export const getArrowVariant = (
  variant: Variant,
  placement: DefaultPlacement,
  border: Border
) =>
  isPopperBordered(placement, border)
    ? getVariant(variant).textVariant
    : getVariant(variant).bgVariant;

export const getTrailVariant = (variant: Variant, disabled?: boolean) => {
  if (disabled) {
    return getDisabledVariant(variant);
  }

  if (variant === 'solid') {
    return 'default';
  }

  if (variant === 'light') {
    return 'light';
  }

  if (variant === 'surface') {
    return 'on';
  }

  return 'none';
};

export const hasVariantBg = (variant: Variant) =>
  variant === 'light' || variant === 'surface' || variant === 'solid';

const getDisabledVariant = (variant: Variant) =>
  hasVariantBg(variant) ? 'light' : variant;
