import { unstyledSwitchConfig } from '../../components/UnstyledSwitch/unstyledSwitchConfig';
import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getBorder } from './get-border';
import { getColor } from './get-color';
import { getFocusableState } from './get-focusable-state';
import { mergeClasses } from './merge-classes';

export const styleSwitchBar = (
  className: string,
  {
    theme = 'light',
    valid = false,
    invalid = false,
    disabled = false,
    variant = 'solid',
    defaultSize = 'md',
    switchScale = 'default',
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
    shadow = 'unset',
    decorated = false
  }: Classes
): ClassName => {
  const isFloating = switchScale === 'slider' || decorated;
  const focusable = getFocusableState({ disabled }, true);
  const autoBorder = getBorder(variant, border).all;
  const isBordered = isAutoBordered(variant, border, true);
  const autoColor = getColor(variant, color, {
    checked: true,
    valid,
    invalid,
    disabled
  });

  return mergeClasses(
    sharedStyle.decoration,
    sharedStyle.bar,
    isFloating && sharedStyle.placement.center,
    sharedStyle.focusable[focusable],
    !isFloating && unstyledSwitchConfig.styles.shared.size.full,
    isFloating &&
      unstyledSwitchConfig.styles.shared.size[switchScale][defaultSize],
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
    systemStyle.color.default.ring[theme][autoColor.ring],
    systemStyle.shadow[shadow],
    className
  );
};
