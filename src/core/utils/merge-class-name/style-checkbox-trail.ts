import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
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
    sharedStyle.decoration,
    sharedStyle.trail,
    sharedStyle.placement.center,
    sharedStyle.focusable[focusable],
    systemStyle.size.text.square[defaultSize],
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
    systemStyle.color.default.bg[theme][colorType.bg],
    isBordered && systemStyle.color.default.border[theme][colorType.text],
    systemStyle.color.default.ring[theme][colorType.ring],
    systemStyle.shadow[shadow],
    className
  );
};
