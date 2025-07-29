import type { InputVariant, Radius, SidePlacement } from '../../types';
import { getClass } from './get-class';

type RadiusType = Record<
  | 'autoL'
  | 'autoR'
  | 'autoTl'
  | 'autoTr'
  | 'l'
  | 'r'
  | 'tl'
  | 'tr'
  | 'bl'
  | 'br',
  string
>;

type RadiusMap = Record<
  InputVariant,
  (isStart?: boolean, radius?: Radius) => RadiusType
>;

const radiusMap: RadiusMap = {
  default: (): RadiusType => ({
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
  light: (isStart, radius): RadiusType => ({
    autoL: 'unset',
    autoR: 'unset',
    autoTl: getClass(isStart, radius),
    autoTr: getClass(!isStart, radius),
    l: 'unset',
    r: 'unset',
    tl: 'unset',
    tr: 'unset',
    bl: 'unset',
    br: 'unset'
  }),
  outlined: (isStart, radius): RadiusType => ({
    autoL: getClass(isStart, radius),
    autoR: getClass(!isStart, radius),
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

const setRadius = (defaultRadius: Radius, radius: Radius): Radius =>
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
): RadiusType => {
  const radiusType = radiusMap[variant](placement === 'start', radius);

  if (placement === 'start') {
    radiusType.l = setRadius(r, rl);
    radiusType.tl = setRadius(rt, rtl);
    radiusType.bl = setRadius(rb, rbl);

    return radiusType;
  }

  radiusType.r = setRadius(r, rr);
  radiusType.tr = setRadius(rt, rtr);
  radiusType.br = setRadius(rb, rbr);

  return radiusType;
};
