import type { Color } from '../../types';

export const getColor = (
  color: Color,
  isDisabled?: boolean,
  isValid?: boolean,
  isInvalid?: boolean
) => (isDisabled ? 'disabled' : getValidityColor(color, isValid, isInvalid));

export const getValidityColor = (
  color: Color,
  isValid?: boolean,
  isInvalid?: boolean
) => (isValid ? 'success' : isInvalid ? 'error' : color);
