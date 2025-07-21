import { unstyledCheckboxConfig } from '../../components/UnstyledCheckbox/unstyledCheckboxConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { isAutoBordered } from '../is-auto-bordered/is-auto-bordered';
import { getColor } from './get-color';
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
) => {
  const isBordered = isAutoBordered(variant, border);
  const colors = getColor(variant, color, { disabled, valid, invalid }, false);

  return mergeClasses(
    unstyledCheckboxConfig.styles.shared.default,
    unstyledCheckboxConfig.styles.trail.default,
    systemStyles.size.text.square[defaultSize],
    systemStyles.border.all[border],
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
    systemStyles.color.normal.ring[theme][colors.ring],
    systemStyles.shadow[shadow],
    className
  );
};
