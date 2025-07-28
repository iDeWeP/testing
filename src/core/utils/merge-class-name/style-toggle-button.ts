import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getColor } from './get-color';
import { getFocusableState } from './get-focusable-state';
import { mergeClasses } from './merge-classes';

export const styleToggleButton = (
  className: string,
  {
    theme = 'light',
    checked = false,
    disabled = false,
    variant = 'solid',
    color = 'unset',
    effect = 'unset'
  }: Classes
): ClassName => {
  const focusable = getFocusableState({ disabled });
  const autoColor = getColor(variant, color, { checked, disabled });

  return mergeClasses(
    checked && sharedStyle.state.on,
    sharedStyle.button,
    sharedStyle.focusable[focusable],
    systemStyle.color.default.bg[theme][autoColor.bg],
    systemStyle.color.default.text[theme][autoColor.text],
    systemStyle.color.default.fill[theme][autoColor.text],
    systemStyle.color.default.ring[theme][autoColor.ring],
    sharedStyle.effect[effect],
    className
  );
};
