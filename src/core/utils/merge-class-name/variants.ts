import type {
  Variant,
  InputVariant,
  DefaultInputVariant,
  DefaultPlacement,
  Border
} from '../../types';
import { isPopperBordered } from './border';

export const getVariant = (variant: Variant, isDisabled?: boolean) => {
  if (variant === 'light' || isDisabled) {
    return { bgVariant: 'light', textVariant: 'default' };
  } else if (variant === 'plain') {
    return { bgVariant: 'none', textVariant: 'on' };
  } else if (variant === 'text') {
    return { bgVariant: 'none', textVariant: 'default' };
  } else if (variant === 'surface') {
    return { bgVariant: 'on', textVariant: 'default' };
  } else if (variant === 'solid') {
    return { bgVariant: 'default', textVariant: 'on' };
  }

  return { bgVariant: 'none', textVariant: 'none' };
};

export const getRingVariant = (variant: Variant, isDisabled: boolean) =>
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

export const getTrailVariant = (variant: Variant) => {
  if (variant === 'solid') {
    return 'default';
  } else if (variant === 'light') {
    return 'light';
  } else if (variant === 'surface') {
    return 'on';
  }

  return 'none';
};
