import type { Color } from '../../types';

export const getColor = (
  isDisabled: boolean,
  color: Color,
  valid?: boolean,
  invalid?: boolean
) => (isDisabled ? 'disabled' : valid ? 'success' : invalid ? 'error' : color);
