import { circularProgressConfig } from '../../components/CircularProgress/circularProgressConfig';
import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
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
  const autoFont = getFontSize(size);
  const autoColor = getColor(variant, color, { disabled }).text;

  return mergeClasses(
    circularProgressConfig.styles.label.default,
    sharedStyle.placement.center,
    systemStyle.size.font[autoFont],
    systemStyle.color.default.text[theme][autoColor],
    systemStyle.color.default.fill[theme][autoColor],
    systemStyle.gap.all[gap],
    disabled && sharedStyle.cursor.none,
    className
  );
};
