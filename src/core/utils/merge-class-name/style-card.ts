import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleCard = (
  className: string,
  { orientation = 'row' }: Classes
) =>
  mergeClasses(
    sharedStyles.display.flex,
    sharedStyles.direction[orientation],
    className
  );
