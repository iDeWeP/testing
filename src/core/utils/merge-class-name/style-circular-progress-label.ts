import { circularProgressConfig } from '../../components/CircularProgress/circularProgressConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getDefaultSize } from './spacing';

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
  const textColor = getColor(variant, color, disabled).textColor;

  return mergeClasses(
    circularProgressConfig.styles.label.default,
    systemStyles.size.font[getDefaultSize(size)],
    systemStyles.color.text[theme][textColor],
    systemStyles.color.fill[theme][textColor],
    disabled && sharedStyles.cursor.none,
    className
  );
};
