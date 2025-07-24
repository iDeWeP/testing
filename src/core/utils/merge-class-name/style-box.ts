import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
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
    gap = 'unset'
  }: Classes
): ClassName => {
  const paddingType = getSpacing(padding);
  const marginType = getSpacing(margin);
  const defaultBorder = getBorder(variant, border).all;
  const colorType = getColor(variant, color);
  const hasRing = ring !== 'unset';

  return mergeClasses(
    systemStyles.padding.default.all[paddingType.all],
    systemStyles.padding.default.x[paddingType.x],
    systemStyles.padding.default.y[paddingType.y],
    systemStyles.padding.default.all[p],
    systemStyles.padding.default.x[px],
    systemStyles.padding.default.y[py],
    systemStyles.padding.default.t[pt],
    systemStyles.padding.default.b[pb],
    systemStyles.padding.default.l[pl],
    systemStyles.padding.default.r[pr],
    systemStyles.margin.all[marginType.all],
    systemStyles.margin.x[marginType.x],
    systemStyles.margin.y[marginType.y],
    systemStyles.margin.all[m],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    systemStyles.border.all[defaultBorder],
    systemStyles.border.all[b],
    systemStyles.border.x[bx],
    systemStyles.border.y[by],
    systemStyles.border.t[bt],
    systemStyles.border.b[bb],
    systemStyles.border.l[bl],
    systemStyles.border.r[br],
    systemStyles.radius.all[radius],
    systemStyles.radius.all[r],
    systemStyles.radius.t[rt],
    systemStyles.radius.b[rb],
    systemStyles.radius.l[rl],
    systemStyles.radius.r[rr],
    systemStyles.radius.tl[rtl],
    systemStyles.radius.tr[rtr],
    systemStyles.radius.bl[rbl],
    systemStyles.radius.br[rbr],
    systemStyles.size.font[font],
    systemStyles.color.default.bg[theme][colorType.bg],
    systemStyles.color.default.text[theme][colorType.text],
    systemStyles.color.default.fill[theme][colorType.text],
    hasRing && systemStyles.color.default.ring[theme][ring],
    systemStyles.shadow[shadow],
    hasRing && sharedStyles.ring.default,
    systemStyles.gap.all[gap],
    className
  );
};
