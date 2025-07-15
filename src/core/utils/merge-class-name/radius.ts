import type { Radius, InputVariant, SidePlacement } from '../../types';

export const getRadius = (condition: boolean, radius: Radius) =>
  condition ? radius : 'unset';

const radiuses = {
  default: () => ({
    l: 'unset',
    r: 'unset',
    tl: 'unset',
    tr: 'unset'
  }),
  light: (isLeft: boolean, radius: Radius) => ({
    l: 'unset',
    r: 'unset',
    tl: getRadius(isLeft, radius),
    tr: getRadius(!isLeft, radius)
  }),
  outlined: (isLeft: boolean, radius: Radius) => ({
    l: getRadius(isLeft, radius),
    r: getRadius(!isLeft, radius),
    tl: 'unset',
    tr: 'unset'
  })
};

export const getInputRadius = (
  variant: InputVariant,
  placement: SidePlacement,
  radius: Radius
) => radiuses[variant](placement === 'left', radius);
