import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleCard = (
  className: string,
  { orientation = 'row', containerSize = 'unset' }: Classes
) =>
  mergeClasses(
    sharedStyles.display.flex,
    sharedStyles.direction[orientation],
    systemStyles.padding.all[containerSize],
    className
  );
