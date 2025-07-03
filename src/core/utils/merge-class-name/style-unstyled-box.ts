import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getBorder } from './border';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';

export const styleUnstyledBox = (
  className: string,
  {
    theme = 'light',
    variant = 'text',
    padding = 'none',
    px = 'none',
    py = 'none',
    pt = 'none',
    pb = 'none',
    pl = 'none',
    pr = 'none',
    margin = 'none',
    mx = 'none',
    my = 'none',
    mt = 'none',
    mb = 'none',
    ml = 'none',
    mr = 'none',
    border = false,
    radius = 'none',
    rt = 'none',
    rb = 'none',
    rl = 'none',
    rr = 'none',
    rtl = 'none',
    rtr = 'none',
    rbl = 'none',
    rbr = 'none',
    font = 'none',
    color = 'none',
    shadow = 'none',
    gap = 'none',
    gx = 'none',
    gy = 'none'
  }: Classes
) => {
  const { bgColor, textColor } = getColor(variant, color);

  return mergeClasses(
    systemStyles.padding.all[padding],
    systemStyles.padding.x[px],
    systemStyles.padding.y[py],
    systemStyles.padding.t[pt],
    systemStyles.padding.b[pb],
    systemStyles.padding.l[pl],
    systemStyles.padding.r[pr],
    systemStyles.margin.all[margin],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    systemStyles.border[getBorder(border)],
    systemStyles.radius.all[radius],
    systemStyles.radius.t[rt],
    systemStyles.radius.b[rb],
    systemStyles.radius.l[rl],
    systemStyles.radius.r[rr],
    systemStyles.radius.tl[rtl],
    systemStyles.radius.tr[rtr],
    systemStyles.radius.bl[rbl],
    systemStyles.radius.br[rbr],
    systemStyles.font[font],
    systemStyles.color.bg[theme][bgColor],
    systemStyles.color.text[theme][textColor],
    systemStyles.color.fill[theme][textColor],
    systemStyles.shadow[shadow],
    systemStyles.gap.all[gap],
    systemStyles.gap.x[gx],
    systemStyles.gap.y[gy],
    className
  );
};
