import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getBorder } from './get-border';
import { getColor } from './get-color';
import { getSpacing } from './get-spacing';
import { mergeClasses } from './merge-classes';

export const styleBox = (
  className: string,
  {
    theme = 'light',
    variant = 'solid',
    padding = 'unset',
    p = 'unset',
    px = 'unset',
    py = 'unset',
    pt = 'unset',
    pb = 'unset',
    pl = 'unset',
    pr = 'unset',
    margin = 'unset',
    m = 'unset',
    mx = 'unset',
    my = 'unset',
    mt = 'unset',
    mb = 'unset',
    ml = 'unset',
    mr = 'unset',
    border = 'auto',
    b = 'unset',
    bx = 'unset',
    by = 'unset',
    bt = 'unset',
    bb = 'unset',
    bl = 'unset',
    br = 'unset',
    radius = 'unset',
    r = 'unset',
    rt = 'unset',
    rb = 'unset',
    rl = 'unset',
    rr = 'unset',
    rtl = 'unset',
    rtr = 'unset',
    rbl = 'unset',
    rbr = 'unset',
    font = 'unset',
    color = 'unset',
    shadow = 'unset',
    ring = 'unset',
    gap = 'unset',
    gx = 'unset',
    gy = 'unset'
  }: Classes
): ClassName => {
  const paddingType = getSpacing(padding);
  const marginType = getSpacing(margin);
  const defaultBorder = getBorder(variant, border).all;
  const colorType = getColor(variant, color);
  const hasRing = ring !== 'unset';

  return mergeClasses(
    systemStyle.padding.default.all[paddingType.all],
    systemStyle.padding.default.x[paddingType.x],
    systemStyle.padding.default.y[paddingType.y],
    systemStyle.padding.default.all[p],
    systemStyle.padding.default.x[px],
    systemStyle.padding.default.y[py],
    systemStyle.padding.default.t[pt],
    systemStyle.padding.default.b[pb],
    systemStyle.padding.default.l[pl],
    systemStyle.padding.default.r[pr],
    systemStyle.margin.all[marginType.all],
    systemStyle.margin.x[marginType.x],
    systemStyle.margin.y[marginType.y],
    systemStyle.margin.all[m],
    systemStyle.margin.x[mx],
    systemStyle.margin.y[my],
    systemStyle.margin.t[mt],
    systemStyle.margin.b[mb],
    systemStyle.margin.l[ml],
    systemStyle.margin.r[mr],
    systemStyle.border.all[defaultBorder],
    systemStyle.border.all[b],
    systemStyle.border.x[bx],
    systemStyle.border.y[by],
    systemStyle.border.t[bt],
    systemStyle.border.b[bb],
    systemStyle.border.l[bl],
    systemStyle.border.r[br],
    systemStyle.radius.all[radius],
    systemStyle.radius.all[r],
    systemStyle.radius.t[rt],
    systemStyle.radius.b[rb],
    systemStyle.radius.l[rl],
    systemStyle.radius.r[rr],
    systemStyle.radius.tl[rtl],
    systemStyle.radius.tr[rtr],
    systemStyle.radius.bl[rbl],
    systemStyle.radius.br[rbr],
    systemStyle.size.font[font],
    systemStyle.color.default.bg[theme][colorType.bg],
    systemStyle.color.default.text[theme][colorType.text],
    systemStyle.color.default.fill[theme][colorType.text],
    hasRing && systemStyle.color.default.ring[theme][ring],
    systemStyle.shadow[shadow],
    hasRing && sharedStyle.ring.default,
    systemStyle.gap.all[gap],
    systemStyle.gap.x[gx],
    systemStyle.gap.y[gy],
    className
  );
};
