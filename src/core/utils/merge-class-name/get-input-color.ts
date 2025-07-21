import type { InputVariant, Color } from '../../types';

export const getInputColor = (
  variant: InputVariant,
  color: Color,
  isDisabled: boolean,
  isValid: boolean,
  isInvalid: boolean
) => {
  if (color === 'unset' || variant !== 'light') {
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
