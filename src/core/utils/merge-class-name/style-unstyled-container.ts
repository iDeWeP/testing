import { unstyledContainerConfig } from '../../components/UnstyledContainer/unstyledContainerConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getBorder } from './border';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getScale } from './scale';
import { getPadding } from './spacing';

export const styleUnstyledContainer = (
  className: string,
  {
    theme = 'light',
    variant = 'solid',
    size = 'md',
    scale = 'normal',
    margin = 'unset',
    mx = 'unset',
    my = 'unset',
    mt = 'unset',
    mb = 'unset',
    ml = 'unset',
    mr = 'unset',
    border = 'auto',
    bx = 'unset',
    by = 'unset',
    bt = 'unset',
    bb = 'unset',
    bl = 'unset',
    br = 'unset',
    radius = 'unset',
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
    gap = 'unset'
  }: Classes
) => {
  const {
    defaultScale,
    dimensionScale,
    sizeScale,
    paddingScale,
    fontSize,
    isSquare
  } = getScale(size, scale);
  const { x, y, t, b, l, r } = getPadding(
    variant,
    size,
    scale,
    border,
    bx,
    by,
    bt,
    bb,
    bl,
    br
  );
  const { bgColor, textColor } = getColor(variant, color);

  return mergeClasses(
    unstyledContainerConfig.styles.root.default,
    systemStyles.size[defaultScale][dimensionScale][sizeScale],
    systemStyles.padding[paddingScale].x[x],
    systemStyles.padding[paddingScale].y[y],
    systemStyles.padding[paddingScale].t[t],
    systemStyles.padding[paddingScale].b[b],
    systemStyles.padding[paddingScale].l[l],
    systemStyles.padding[paddingScale].r[r],
    systemStyles.margin.all[margin],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    systemStyles.border.all[getBorder(variant, border)],
    systemStyles.border.x[bx],
    systemStyles.border.y[by],
    systemStyles.border.t[bt],
    systemStyles.border.b[bb],
    systemStyles.border.l[bl],
    systemStyles.border.r[br],
    systemStyles.radius.all[radius],
    systemStyles.radius.t[rt],
    systemStyles.radius.b[rb],
    systemStyles.radius.l[rl],
    systemStyles.radius.r[rr],
    systemStyles.radius.tl[rtl],
    systemStyles.radius.tr[rtr],
    systemStyles.radius.bl[rbl],
    systemStyles.radius.br[rbr],
    systemStyles.size.font[fontSize],
    systemStyles.color.bg[theme][bgColor],
    systemStyles.color.text[theme][textColor],
    systemStyles.color.fill[theme][textColor],
    systemStyles.shadow[shadow],
    systemStyles.gap.all[gap],
    isSquare && sharedStyles.scale.square,
    className
  );
};
