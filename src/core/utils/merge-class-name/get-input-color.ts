import type { InputVariant, Color } from '../../types';

export const getInputColor = (
  isValid: boolean,
  isInvalid: boolean,
  isDisabled: boolean,
  variant: InputVariant,
  color: Color
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
