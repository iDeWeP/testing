import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleLabel = (
  className: string,
  { orientation = 'row' }: Classes
) =>
  mergeClasses(
    sharedStyles.display['inline-flex'],
    sharedStyles.direction[orientation],
    className
  );
