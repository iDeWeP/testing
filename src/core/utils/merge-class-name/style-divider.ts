import { dividerConfig } from '../../components/Divider/dividerConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getDividerPadding } from './spacing';

export const styleDivider = (
  className: string,
  { orientation = 'row', padding = 'unset', decorated = false }: Classes
) => {
  const { x, y } = getDividerPadding(orientation, padding);

  return mergeClasses(
    sharedStyles.display.flex,
    decorated && dividerConfig.styles.root.decorated,
    dividerConfig.styles.root.orientation[orientation],
    systemStyles.padding.default.x[x],
    systemStyles.padding.default.y[y],
    className
  );
};
