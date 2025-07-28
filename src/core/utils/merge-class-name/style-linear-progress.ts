import { unstyledLinearProgressConfig } from '../../components/UnstyledLinearProgress/unstyledLinearProgressConfig';
import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getBorder } from './get-border';
import { getColor } from './get-color';
import { getSpacing } from './get-spacing';
import { mergeClasses } from './merge-classes';

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
    decorated = false
  }: Classes
): ClassName => {
  const autoSize = decorated ? 'decorated' : 'default';
  const autoMargin = getSpacing(margin);
  const autoBorder = getBorder(variant, border).all;
  const isBordered = isAutoBordered(variant, border);
  const autoColor = getColor(variant, color, { disabled });
  const hasRing = ring !== 'unset';

  return mergeClasses(
    unstyledLinearProgressConfig.styles.root.orientation[orientation],
    unstyledLinearProgressConfig.styles.root.size[orientation][autoSize][size],
    systemStyle.margin.all[autoMargin.all],
    systemStyle.margin.x[autoMargin.x],
    systemStyle.margin.y[autoMargin.y],
    systemStyle.margin.all[m],
    systemStyle.margin.x[mx],
    systemStyle.margin.y[my],
    systemStyle.margin.t[mt],
    systemStyle.margin.b[mb],
    systemStyle.margin.l[ml],
    systemStyle.margin.r[mr],
    systemStyle.border.all[autoBorder],
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
    systemStyle.color.default.bg[theme][autoColor.bg],
    isBordered && systemStyle.color.default.border[theme][autoColor.text],
    hasRing && systemStyle.color.default.ring[theme][ring],
    systemStyle.shadow[shadow],
    hasRing && sharedStyle.ring.default,
    disabled && sharedStyle.cursor.disabled,
    className
  );
};
