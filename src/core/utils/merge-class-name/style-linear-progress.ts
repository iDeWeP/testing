import { unstyledLinearProgressConfig } from '../../components/UnstyledLinearProgress/unstyledLinearProgressConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
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
  const sizeType = decorated ? 'decorated' : 'default';
  const marginType = getSpacing(margin);
  const defaultBorder = getBorder(variant, border).all;
  const isBordered = isAutoBordered(variant, border);
  const colorType = getColor(variant, color, { disabled });
  const hasRing = ring !== 'unset';

  return mergeClasses(
    unstyledLinearProgressConfig.styles.root.orientation[orientation],
    unstyledLinearProgressConfig.styles.root.size[orientation][sizeType][size],
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
    systemStyles.color.default.bg[theme][colorType.bg],
    isBordered && systemStyles.color.default.border[theme][colorType.text],
    hasRing && systemStyles.color.default.ring[theme][ring],
    systemStyles.shadow[shadow],
    hasRing && sharedStyles.ring.default,
    className
  );
};
