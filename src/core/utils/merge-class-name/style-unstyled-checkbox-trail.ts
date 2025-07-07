import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { isCheckboxBordered } from './border';
import { getColor, getStateColor } from './color';
import { mergeClasses } from './merge-classes';

export const styleUnstyledCheckboxTrail = (
  className: string,
  {
    theme = 'light',
    valid = false,
    invalid = false,
    disabled = false,
    defaultSize = 'md',
    border = 'unset',
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
    shadow = 'unset'
  }: Classes
) => {
  const { bgColor, textColor } = getColor(
    'light',
    getStateColor(color),
    disabled,
    valid,
    invalid
  );
  const isBordered = isCheckboxBordered(border, bx, by, bt, bb, bl, br);

  return mergeClasses(
    unstyledCheckboxConfig.styles.shared.default,
    unstyledCheckboxConfig.styles.trail.default,
    systemStyles.size.text.square[defaultSize],
    systemStyles.border.all[border],
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
    systemStyles.radius.r[rbr],
    systemStyles.color.bg[theme][bgColor],
    isBordered && systemStyles.color.border[theme][textColor],
    systemStyles.color.ring[theme][textColor],
    systemStyles.shadow[shadow],
    className
  );
};
