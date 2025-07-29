import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleFab = (
  className: string,
  { defaultPosition = 'absolute', cornerPlacement = 'bottom-right' }: Classes
): ClassName =>
  mergeClasses(
    sharedStyle.position[defaultPosition],
    systemStyle.placement[cornerPlacement],
    className
  );
