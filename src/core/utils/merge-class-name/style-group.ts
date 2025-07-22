import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleGroup = (
  className: string,
  { orientation = 'row', spacing = 'unset' }: Classes
): ClassName =>
  mergeClasses(
    sharedStyles.display.flex,
    sharedStyles.direction[orientation],
    systemStyles.spacing[orientation][spacing],
    className
  );
