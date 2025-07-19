import { unstyledContainerConfig } from '../../components/UnstyledContainer/unstyledContainerConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getBorder } from './border';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getScale } from './scale';
import { getContainerPadding, getSpacing, getFontSize } from './spacing';

export const styleContainer = (
  className: string,
  {
    theme = 'light',
    variant = 'solid',
    size = 'md',
    scale = 'normal',
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
    color = 'unset',
    shadow = 'unset',
    ring = 'unset',
    gap = 'unset'
  }: Classes
) => {
  const scales = getScale(size, scale);
  const paddings = getContainerPadding(
    variant,
    size,
    scale,
    border,
    b,
    bx,
    by,
    bt,
    bb,
    bl,
    br
  );
  const margins = getSpacing(margin);
  const hasRing = ring !== 'unset';
  const colors = getColor(variant, color);

  return mergeClasses(
    unstyledContainerConfig.styles.root.default,
    systemStyles.size.normal[scales.size][size],
    systemStyles.padding[scales.padding].x[paddings.x],
    systemStyles.padding[scales.padding].y[paddings.y],
    systemStyles.padding[scales.padding].t[paddings.t],
    systemStyles.padding[scales.padding].b[paddings.b],
    systemStyles.padding[scales.padding].l[paddings.l],
    systemStyles.padding[scales.padding].r[paddings.r],
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
    systemStyles.size.font[getFontSize(size)],
    systemStyles.color.normal.bg[theme][colors.bg],
    systemStyles.color.normal.text[theme][colors.text],
    systemStyles.color.normal.fill[theme][colors.text],
    hasRing && systemStyles.color.normal.ring[theme][ring],
    systemStyles.shadow[shadow],
    hasRing && sharedStyles.ring.normal,
    systemStyles.gap.all[gap],
    scales.isSquare && sharedStyles.scale.square,
    className
  );
};
