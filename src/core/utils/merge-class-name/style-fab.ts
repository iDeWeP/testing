import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleFab = (
  className: string,
  { defaultPosition = 'absolute', cornerPlacement = 'bottom-right' }: Classes
) =>
  mergeClasses(
    sharedStyles.position[defaultPosition],
    systemStyles.placement[cornerPlacement],
    className
  );
