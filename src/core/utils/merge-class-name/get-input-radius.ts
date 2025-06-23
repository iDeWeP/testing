import type { InputVariant, SidePlacement, Radius } from '../../types';

export const getInputRadius = (
  variant: InputVariant,
  placement: SidePlacement,
  radius: Radius
) => {
  if (
    variant === 'default' ||
    variant === 'default-plain' ||
    radius === 'none'
  ) {
    return 'none';
  }

  if (variant === 'light') {
    return `${radius}-top-${placement}`;
  }

  return `${radius}-${placement}`;
};
