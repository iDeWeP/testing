import type { Color } from '../../types';

export const getColor = (
  color: Color,
  isDisabled?: boolean,
  valid?: boolean,
  invalid?: boolean
) => (isDisabled ? 'disabled' : valid ? 'success' : invalid ? 'error' : color);

export const getValidityColor = (
  color: Color,
  isValid: boolean,
  isInvalid: boolean
) => (isValid ? 'success' : isInvalid ? 'error' : color);
