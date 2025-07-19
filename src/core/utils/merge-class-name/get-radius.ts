import type { Radius, InputVariant, SidePlacement } from '../../types';
import { getClass } from './get-class';

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
    tl: getClass(isLeft, radius),
    tr: getClass(!isLeft, radius)
  }),
  outlined: (isLeft: boolean, radius: Radius) => ({
    l: getClass(isLeft, radius),
    r: getClass(!isLeft, radius),
    tl: 'unset',
    tr: 'unset'
  })
};

export const getInputRadius = (
  variant: InputVariant,
  placement: SidePlacement,
  radius: Radius
) => radiuses[variant](placement === 'left', radius);
