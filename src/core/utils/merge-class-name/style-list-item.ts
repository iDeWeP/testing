import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
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
    variant = 'solid',
    orientation = 'row',
    color = 'unset',
    effect = 'unset',
    decorated = false
  }: Classes
): ClassName => {
  const focusable = getFocusableState({ disabled });
  const colorType = getColor(variant, color, { disabled }, checked);

  return mergeClasses(
    sharedStyles.position.relative,
    sharedStyles.focusable[focusable],
    disabled && systemStyles.color.default.bg[theme][colorType.bg],
    disabled && systemStyles.color.default.text[theme][colorType.text],
    disabled && systemStyles.color.default.fill[theme][colorType.text],
    decorated && systemStyles.color.default.ring[theme][colorType.ring],
    sharedStyles.direction[orientation],
    sharedStyles.effect[effect],
    className
  );
};
