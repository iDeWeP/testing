import type { InputVariant } from '../../types';

export const getInputColor = (variant: InputVariant, isDisabled?: boolean) =>
  isDisabled
    ? 'disabled-light'
    : variant === 'light'
    ? 'surface-light'
    : 'none';
