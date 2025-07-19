import { circularProgressConfig } from '../../components/CircularProgress/circularProgressConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
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
    color = 'unset'
  }: Classes
) => {
  const textColor = getColor(variant, color, { disabled }).text;

  return mergeClasses(
    circularProgressConfig.styles.label.default,
    systemStyles.size.font[getFontSize(size)],
    systemStyles.color.normal.text[theme][textColor],
    systemStyles.color.normal.fill[theme][textColor],
    disabled && sharedStyles.cursor.none,
    className
  );
};
