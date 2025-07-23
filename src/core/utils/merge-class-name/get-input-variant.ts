import type { InputVariant } from '../../types';

export const getInputVariant = (
  variant: InputVariant
): 'default' | 'outlined' => (variant === 'outlined' ? 'outlined' : 'default');
