import type { InputVariant, Color } from '../../types';

export const getInputColor = (
  variant: InputVariant,
  color: Color,
  isValid: boolean,
  isInvalid: boolean,
  isDisabled: boolean
): string => {
  if (color === 'unset' || (variant !== 'light' && !isDisabled)) {
    return 'unset';
  }

  if (isDisabled) {
    return 'disabled-light';
  }

  if (isValid) {
    return 'success-light';
  }

  if (isInvalid) {
    return 'error-light';
  }

  return 'surface-light';
};
