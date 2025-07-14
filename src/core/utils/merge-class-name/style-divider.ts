import { dividerConfig } from '../../components/Divider/dividerConfig';
import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleDivider = (
  className: string,
  { orientation = 'row', decorated = false }: Classes
) =>
  mergeClasses(
    sharedStyles.display.flex,
    decorated && dividerConfig.styles.root.decorated,
    dividerConfig.styles.root.orientation[orientation],
    className
  );
