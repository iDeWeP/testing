import { sharedStyle } from '../../config/shared-style';
import type { Classes, ClassName } from '../../types';
import { getTransition } from './get-transition';
import { mergeClasses } from './merge-classes';

export const styleTransition = (
  className: string,
  { transition = 'fade' }: Classes
): ClassName =>
  mergeClasses(sharedStyle.transition[getTransition(transition)], className);
