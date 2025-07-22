import { sharedStyles } from '../../config/shared-styles';
import type { Classes, ClassName } from '../../types';
import { getTransition } from './get-transition';
import { mergeClasses } from './merge-classes';

export const styleTransition = (
  className: string,
  { transition = 'fade' }: Classes
): ClassName =>
  mergeClasses(sharedStyles.transition[getTransition(transition)], className);
