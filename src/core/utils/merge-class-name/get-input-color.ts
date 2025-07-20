import type { InputVariant, Color } from '../../types';

export const getInputColor = (
  variant: InputVariant,
  color: Color,
  isDisabled?: boolean
) => {
  if (color === 'unset') {
    return 'unset';
  }

  if (isDisabled) {
    return 'disabled-light';
  }

  return variant === 'light' ? 'surface-light' : 'unset';
};
