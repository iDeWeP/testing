import { unstyledContainerConfig } from '../../components/UnstyledContainer/unstyledContainerConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
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
) => {
  const spacing = getContainerSpacing(variant, size, scale, border);
  const margins = getSpacing(margin);
  const defaultBorder = getBorder(variant, border).all;
  const fontSize = getFontSize(size);
  const colors = getColor(variant, color);
  const hasRing = ring !== 'unset';

  return mergeClasses(
    unstyledContainerConfig.styles.root.default,
    systemStyles.size.default[spacing.size][size],
    systemStyles.padding[spacing.scale].all[spacing.all],
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
    systemStyles.size.font[fontSize],
    systemStyles.color.default.bg[theme][colors.bg],
    systemStyles.color.default.text[theme][colors.text],
    systemStyles.color.default.fill[theme][colors.text],
    hasRing && systemStyles.color.default.ring[theme][ring],
    systemStyles.shadow[shadow],
    hasRing && sharedStyles.ring.default,
    systemStyles.gap.all[gap],
    spacing.isSquare && sharedStyles.scale.square,
    className
  );
};
