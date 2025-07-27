import { sharedStyle } from '../../config/shared-style';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const stylePaper = (
  className: string,
  { orientation = 'row' }: Classes
): ClassName =>
  mergeClasses(
    sharedStyle.display.flex,
    sharedStyle.direction[orientation],
    className
  );
