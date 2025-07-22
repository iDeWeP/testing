import { unstyledSwitchConfig } from '../../components/UnstyledSwitch/unstyledSwitchConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getColor } from './get-color';
import { getFocusableState } from './get-focusable-state';
import { mergeClasses } from './merge-classes';

export const styleSwitchTrail = (
  className: string,
  {
    theme = 'light',
    valid = false,
    invalid = false,
    disabled = false,
    variant = 'solid',
    defaultSize = 'md',
    switchScale = 'default',
    defaultBorder = 'unset',
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
  const isBordered = isAutoBordered(variant, defaultBorder);
  const colorType = getColor(
    variant,
    color,
    { disabled, valid, invalid },
    false
  );

  return mergeClasses(
    sharedStyles.decoration,
    sharedStyles.trail,
    isFloating && sharedStyles.placement.center,
    sharedStyles.focusable[focusable],
    !isFloating && unstyledSwitchConfig.styles.shared.size.full,
    isFloating &&
      unstyledSwitchConfig.styles.shared.size[switchScale][defaultSize],
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
