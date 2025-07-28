import { sharedStyle } from '../../config/shared-style';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleLabel = (
  className: string,
  { orientation = 'row' }: Classes
): ClassName =>
  mergeClasses(
    sharedStyle.display['inline-flex'],
    sharedStyle.direction[orientation],
    className
  );
