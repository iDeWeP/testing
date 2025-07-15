import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { isCheckboxBordered, getBorder } from './border';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';

export const styleCheckboxIcon = (
  className: string,
  {
    theme = 'light',
    valid = false,
    invalid = false,
    disabled = false,
    variant = 'solid',
    defaultSize = 'md',
    border = 'unset',
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
    shadow = 'unset'
  }: Classes
) => {
  const isBordered = isCheckboxBordered(
    border,
    b,
    bx,
    by,
    bt,
    bb,
    bl,
    br,
    variant
  );
  const colors = getColor(variant, color, disabled, valid, invalid, true);

  return mergeClasses(
    unstyledCheckboxConfig.styles.shared.default,
    unstyledCheckboxConfig.styles.icon.default,
    systemStyles.size.text.square[defaultSize],
    systemStyles.border.all[getBorder(variant, border)],
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
    isBordered && systemStyles.color.border[theme][colors.text],
    systemStyles.color.fill[theme][colors.text],
    systemStyles.color.ring[theme][colors.text],
    systemStyles.shadow[shadow],
    className
  );
};
