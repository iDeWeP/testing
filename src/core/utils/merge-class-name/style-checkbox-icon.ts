import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getBorder } from './get-border';
import { getColor } from './get-color';
import { getFocusableState } from './get-focusable-state';
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
  const focusable = getFocusableState({ disabled }, true);
  const defaultBorder = getBorder(variant, border).all;
  const isBordered = isAutoBordered(variant, border);
  const colors = getColor(variant, color, { disabled, valid, invalid }, true);

  return mergeClasses(
    unstyledCheckboxConfig.styles.shared.default,
    unstyledCheckboxConfig.styles.icon.default,
    sharedStyles.focusable[focusable],
    systemStyles.size.text.square[defaultSize],
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
    systemStyles.color.normal.bg[theme][colors.bg],
    isBordered && systemStyles.color.normal.border[theme][colors.text],
    systemStyles.color.normal.fill[theme][colors.text],
    systemStyles.color.normal.ring[theme][colors.ring],
    systemStyles.shadow[shadow],
    className
  );
};
