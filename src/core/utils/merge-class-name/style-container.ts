import { unstyledContainerConfig } from '../../components/UnstyledContainer/unstyledContainerConfig';
import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getBorder } from './get-border';
import { getColor } from './get-color';
import { getContainerSpacing } from './get-container-spacing';
import { getFontSize } from './get-font-size';
import { getSpacing } from './get-spacing';
import { mergeClasses } from './merge-classes';

export const styleContainer = (
  className: string,
  {
    theme = 'light',
    variant = 'solid',
    size = 'md',
    scale = 'default',
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
    gap = 'unset'
  }: Classes
): ClassName => {
  const spacing = getContainerSpacing(variant, size, scale, border);
  const marginType = getSpacing(margin);
  const defaultBorder = getBorder(variant, border).all;
  const fontSize = getFontSize(size);
  const colorType = getColor(variant, color);
  const hasRing = ring !== 'unset';

  return mergeClasses(
    unstyledContainerConfig.styles.root.default,
    systemStyle.size.default[spacing.size][size],
    systemStyle.padding[spacing.scale].all[spacing.all],
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
    systemStyle.size.font[fontSize],
    systemStyle.color.default.bg[theme][colorType.bg],
    systemStyle.color.default.text[theme][colorType.text],
    systemStyle.color.default.fill[theme][colorType.text],
    hasRing && systemStyle.color.default.ring[theme][ring],
    systemStyle.shadow[shadow],
    hasRing && sharedStyle.ring.default,
    systemStyle.gap.all[gap],
    spacing.isSquare && sharedStyle.scale.square,
    className
  );
};
