import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getColor } from './get-color';
import { getFocusableState } from './get-focusable-state';
import { mergeClasses } from './merge-classes';

export const styleCard = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    clickable = false,
    variant = 'solid',
    orientation = 'row',
    color = 'unset',
    effect = 'unset'
  }: Classes
): ClassName => {
  const isFocusable = clickable || disabled;
  const focusable = getFocusableState({ disabled });
  const autoColor = getColor(variant, color, { disabled });

  return mergeClasses(
    sharedStyle.position.relative,
    isFocusable && sharedStyle.focusable[focusable],
    disabled && systemStyle.color.default.bg[theme][autoColor.bg],
    disabled && systemStyle.color.default.text[theme][autoColor.text],
    disabled && systemStyle.color.default.fill[theme][autoColor.text],
    clickable && systemStyle.color.default.ring[theme][autoColor.ring],
    sharedStyle.direction[orientation],
    clickable && sharedStyle.effect[effect],
    className
  );
};
