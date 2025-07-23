import { circularProgressConfig } from '../../components/CircularProgress/circularProgressConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { getColor } from './get-color';
import { getFontSize } from './get-font-size';
import { mergeClasses } from './merge-classes';

export const styleCircularProgressLabel = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    variant = 'text',
    size = 'md',
    color = 'unset',
    gap = 'unset'
  }: Classes
): ClassName => {
  const fontSize = getFontSize(size);
  const textColor = getColor(variant, color, { disabled }).text;

  return mergeClasses(
    circularProgressConfig.styles.label.default,
    sharedStyles.placement.center,
    systemStyles.size.font[fontSize],
    systemStyles.color.default.text[theme][textColor],
    systemStyles.color.default.fill[theme][textColor],
    systemStyles.gap.all[gap],
    disabled && sharedStyles.cursor.none,
    className
  );
};
