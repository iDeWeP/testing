import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
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
) => {
  const paddings = getSpacing(padding);
  const margins = getSpacing(margin);
  const colors = getColor(variant, color);
  const hasRing = ring !== 'unset';

  return mergeClasses(
    systemStyles.padding.default.all[paddings.all],
    systemStyles.padding.default.x[paddings.x],
    systemStyles.padding.default.y[paddings.y],
    systemStyles.padding.default.all[p],
    systemStyles.padding.default.x[px],
    systemStyles.padding.default.y[py],
    systemStyles.padding.default.t[pt],
    systemStyles.padding.default.b[pb],
    systemStyles.padding.default.l[pl],
    systemStyles.padding.default.r[pr],
    systemStyles.margin.all[margins.all],
    systemStyles.margin.x[margins.x],
    systemStyles.margin.y[margins.y],
    systemStyles.margin.all[m],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    systemStyles.border.all[getBorder(variant, border).all],
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
    systemStyles.color.normal.bg[theme][colors.bg],
    systemStyles.color.normal.text[theme][colors.text],
    systemStyles.color.normal.fill[theme][colors.text],
    hasRing && systemStyles.color.normal.ring[theme][ring],
    systemStyles.shadow[shadow],
    hasRing && sharedStyles.ring.normal,
    systemStyles.gap.all[gap],
    systemStyles.gap.x[gx],
    systemStyles.gap.y[gy],
    className
  );
};
