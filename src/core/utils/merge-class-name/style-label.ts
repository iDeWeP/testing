import { sharedStyles } from '../../config/shared-styles';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleLabel = (
  className: string,
  { orientation = 'row' }: Classes
): ClassName =>
  mergeClasses(
    sharedStyles.display['inline-flex'],
    sharedStyles.direction[orientation],
    className
  );
