import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { isCheckboxBordered, getBorder } from './border';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';

export const styleUnstyledCheckboxIcon = (
  className: string,
  {
    theme = 'light',
    valid = false,
    invalid = false,
    disabled = false,
    variant = 'solid',
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
    variant,
    color,
    disabled,
    valid,
    invalid
  );
  const isBordered = isCheckboxBordered(
    border,
    bx,
    by,
    bt,
    bb,
    bl,
    br,
    variant
  );

  return mergeClasses(
    unstyledCheckboxConfig.styles.shared.default,
    unstyledCheckboxConfig.styles.icon.default,
    systemStyles.size.text.square[defaultSize],
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
    systemStyles.color.bg[theme][bgColor],
    systemStyles.color.fill[theme][textColor],
    isBordered && systemStyles.color.border[theme][textColor],
    systemStyles.color.ring[theme][textColor],
    systemStyles.shadow[shadow],
    className
  );
};
