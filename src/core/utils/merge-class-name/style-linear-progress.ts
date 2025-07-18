import { unstyledLinearProgressConfig } from '../../components/UnstyledLinearProgress/unstyledLinearProgressConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getBorder, isBordered } from './border';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getSpacing, getSpacingType } from './spacing';

export const styleLinearProgress = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    variant = 'light',
    orientation = 'row',
    size = 'md',
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
    decorated = false
  }: Classes
) => {
  const margins = getSpacing(margin);
  const colors = getColor(variant, color, disabled);

  return mergeClasses(
    unstyledLinearProgressConfig.styles.root.orientation[orientation],
    unstyledLinearProgressConfig.styles.root.size[orientation][
      getSpacingType(decorated)
    ][size],
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
    systemStyles.color.bg[theme][colors.bg],
    isBordered(border, b, bx, by, bt, bb, bl, br) &&
      systemStyles.color.border[theme][colors.text],
    systemStyles.shadow[shadow],
    className
  );
};
