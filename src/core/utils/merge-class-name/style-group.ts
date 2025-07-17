import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleGroup = (
  className: string,
  { orientation = 'row', spacing = 'unset' }: Classes
) =>
  mergeClasses(
    sharedStyles.display.flex,
    sharedStyles.direction[orientation],
    systemStyles.spacing[orientation][spacing],
    className
  );
