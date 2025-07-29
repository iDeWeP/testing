import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getColor } from './get-color';
import { getFocusableState } from './get-focusable-state';
import { mergeClasses } from './merge-classes';

export const styleListItem = (
  className: string,
  {
    theme = 'light',
    checked,
    disabled = false,
    clickable = false,
    variant = 'solid',
    color = 'unset',
    effect = 'unset'
  }: Classes
): ClassName => {
  const isTransitionable = checked !== undefined && !disabled;
  const isClickable = clickable || checked !== undefined;
  const focusable = getFocusableState({ disabled, clickable: isClickable });
  const autoColor = getColor(variant, color, { checked, disabled });

  return mergeClasses(
    checked && sharedStyle.state.on,
    sharedStyle.position.relative,
    isTransitionable && sharedStyle.transition.color,
    sharedStyle.focusable[focusable],
    systemStyle.color.default.bg[theme][autoColor.bg],
    systemStyle.color.default.text[theme][autoColor.text],
    systemStyle.color.default.fill[theme][autoColor.text],
    isClickable && systemStyle.color.default.ring[theme][autoColor.ring],
    isClickable && sharedStyle.effect[effect],
    className
  );
};
