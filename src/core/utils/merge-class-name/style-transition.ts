import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { getTransition } from './get-transition';
import { mergeClasses } from './merge-classes';

export const styleTransition = (
  className: string,
  { transition = 'fade' }: Classes
) =>
  mergeClasses(sharedStyles.transition[getTransition(transition)], className);
