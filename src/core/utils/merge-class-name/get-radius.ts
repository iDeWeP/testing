import type { Radius, InputVariant, SidePlacement } from '../../types';
import { setClass } from '../set-class/set-class';

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
    tl: setClass(isLeft, radius),
    tr: setClass(!isLeft, radius)
  }),
  outlined: (isLeft: boolean, radius: Radius) => ({
    l: setClass(isLeft, radius),
    r: setClass(!isLeft, radius),
    tl: 'unset',
    tr: 'unset'
  })
};

export const getInputRadius = (
  variant: InputVariant,
  placement: SidePlacement,
  radius: Radius
) => radiuses[variant](placement === 'left', radius);
