import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getBorder } from './get-border';
import { getColor } from './get-color';
import { getFocusableState } from './get-focusable-state';
import { mergeClasses } from './merge-classes';

export const styleCheckboxTrail = (
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
): ClassName => {
  const focusable = getFocusableState({ disabled }, true);
  const defaultBorder = getBorder(variant, border, { isChecked: false }).all;
  const isBordered = isAutoBordered(variant, border, false);
  const colorType = getColor(
    variant,
    color,
    { valid, invalid, disabled },
    false
  );

  return mergeClasses(
    sharedStyles.decoration,
    sharedStyles.trail,
    sharedStyles.placement.center,
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
    systemStyles.color.default.bg[theme][colorType.bg],
    isBordered && systemStyles.color.default.border[theme][colorType.text],
    systemStyles.color.default.ring[theme][colorType.ring],
    systemStyles.shadow[shadow],
    className
  );
};
