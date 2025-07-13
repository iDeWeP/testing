import { dividerConfig } from '../../components/Divider/dividerConfig';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleDividerLine = (
  className: string,
  { orientation = 'row', decorated = false }: Classes
) =>
  mergeClasses(
    decorated && dividerConfig.styles.root.decorated,
    dividerConfig.styles.root.orientation[orientation],
    className
  );
