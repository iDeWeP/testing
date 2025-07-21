import type { Radius, InputVariant, SidePlacement } from '../../types';
import { getClass } from './get-class';

const autoRadiuses = {
  default: () => ({
    autoL: 'unset',
    autoR: 'unset',
    autoTl: 'unset',
    autoTr: 'unset',
    l: 'unset',
    r: 'unset',
    tl: 'unset',
    tr: 'unset',
    bl: 'unset',
    br: 'unset'
  }),
  light: (isLeft: boolean, radius: Radius) => ({
    autoL: 'unset',
    autoR: 'unset',
    autoTl: getClass(isLeft, radius),
    autoTr: getClass(!isLeft, radius),
    l: 'unset',
    r: 'unset',
    tl: 'unset',
    tr: 'unset',
    bl: 'unset',
    br: 'unset'
  }),
  outlined: (isLeft: boolean, radius: Radius) => ({
    autoL: getClass(isLeft, radius),
    autoR: getClass(!isLeft, radius),
    autoTl: 'unset',
    autoTr: 'unset',
    l: 'unset',
    r: 'unset',
    tl: 'unset',
    tr: 'unset',
    bl: 'unset',
    br: 'unset'
  })
};

const setRadius = (defaultRadius: Radius, radius: Radius) =>
  radius === 'unset' ? defaultRadius : radius;

export const getInputRadius = (
  variant: InputVariant,
  placement: SidePlacement,
  radius: Radius,
  r: Radius,
  rt: Radius,
  rb: Radius,
  rl: Radius,
  rr: Radius,
  rtl: Radius,
  rtr: Radius,
  rbl: Radius,
  rbr: Radius
) => {
  const radiuses = autoRadiuses[variant](placement === 'left', radius);

  if (placement === 'left') {
    radiuses.l = setRadius(r, rl);
    radiuses.tl = setRadius(rt, rtl);
    radiuses.bl = setRadius(rb, rbl);
  } else {
    radiuses.r = setRadius(r, rr);
    radiuses.tr = setRadius(rt, rtr);
    radiuses.br = setRadius(rb, rbr);
  }

  return radiuses;
};
