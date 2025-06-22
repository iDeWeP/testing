import type { Color } from '../../types';

export const getValidityColor = (
  isValid: boolean,
  isInvalid: boolean,
  color: Color
) => (isValid ? 'success' : isInvalid ? 'error' : color);
