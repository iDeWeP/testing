import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleUnstyledCard = (
  className: string,
  { orientation = 'row', cardSize = 'unset' }: Classes
) =>
  mergeClasses(
    sharedStyles.display.flex,
    sharedStyles.direction[orientation],
    systemStyles.padding.all[cardSize],
    className
  );
