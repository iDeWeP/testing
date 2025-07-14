import { dividerConfig } from '../../components/Divider/dividerConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getDividerPadding } from './spacing';

export const styleDivider = (
  className: string,
  {
    theme = 'light',
    orientation = 'row',
    padding = 'unset',
    font = 'unset',
    color = 'unset',
    decorated = false
  }: Classes
) => {
  const { x, y } = getDividerPadding(orientation, padding);
  const textColor = getColor('text', color).textColor;

  return mergeClasses(
    sharedStyles.display.flex,
    decorated && dividerConfig.styles.root.decorated,
    dividerConfig.styles.root.orientation[orientation],
    systemStyles.padding.default.x[x],
    systemStyles.padding.default.y[y],
    decorated && systemStyles.size.font[font],
    systemStyles.color.text[theme][textColor],
    decorated && systemStyles.color.fill[theme][textColor],
    className
  );
};
