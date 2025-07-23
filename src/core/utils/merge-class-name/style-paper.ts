import { sharedStyles } from '../../config/shared-styles';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const stylePaper = (
  className: string,
  { orientation = 'row' }: Classes
): ClassName =>
  mergeClasses(
    sharedStyles.display.flex,
    sharedStyles.direction[orientation],
    className
  );
