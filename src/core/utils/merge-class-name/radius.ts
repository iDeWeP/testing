import type { Radius, InputVariant, SidePlacement } from '../../types';

const isRadiusSet = (r?: Radius) => r !== 'unset';

const radiuses = {
  default: () => ({
    l: 'unset',
    r: 'unset',
    tl: 'unset',
    tr: 'unset',
    bl: 'unset',
    br: 'unset'
  }),
  light: (
    isLeft?: boolean,
    radius?: Radius,
    t?: Radius,
    l?: Radius,
    r?: Radius,
    tl?: Radius,
    tr?: Radius
  ) => ({
    l: 'unset',
    r: 'unset',
    tl: isLeft
      ? (isRadiusSet(tl) && tl) ||
        (isRadiusSet(l) && l) ||
        (isRadiusSet(t) && t) ||
        (isRadiusSet(radius) && radius) ||
        'unset'
      : 'unset',
    tr: !isLeft
      ? (isRadiusSet(tr) && tr) ||
        (isRadiusSet(r) && r) ||
        (isRadiusSet(t) && t) ||
        (isRadiusSet(radius) && radius) ||
        'unset'
      : 'unset',
    bl: 'unset',
    br: 'unset'
  }),
  outlined: (
    isLeft?: boolean,
    radius?: Radius,
    t?: Radius,
    l?: Radius,
    r?: Radius,
    tl?: Radius,
    tr?: Radius,
    b?: Radius,
    bl?: Radius,
    br?: Radius
  ) => ({
    l: isLeft
      ? (isRadiusSet(l) && l) || (isRadiusSet(radius) && radius) || 'unset'
      : 'unset',
    r: !isLeft
      ? (isRadiusSet(r) && r) || (isRadiusSet(radius) && radius) || 'unset'
      : 'unset',
    tl: isLeft
      ? (isRadiusSet(tl) && tl) || (isRadiusSet(t) && t) || 'unset'
      : 'unset',
    tr: !isLeft
      ? (isRadiusSet(tr) && tr) || (isRadiusSet(t) && t) || 'unset'
      : 'unset',
    bl: isLeft
      ? (isRadiusSet(bl) && bl) || (isRadiusSet(b) && b) || 'unset'
      : 'unset',
    br: !isLeft
      ? (isRadiusSet(br) && br) || (isRadiusSet(b) && b) || 'unset'
      : 'unset'
  })
};

export const getInputRadius = (
  variant: InputVariant,
  placement: SidePlacement,
  radius: Radius,
  t: Radius,
  b: Radius,
  l: Radius,
  r: Radius,
  tl: Radius,
  tr: Radius,
  bl: Radius,
  br: Radius
) =>
  radiuses[variant](placement === 'left', radius, t, l, r, tl, tr, b, bl, br);
