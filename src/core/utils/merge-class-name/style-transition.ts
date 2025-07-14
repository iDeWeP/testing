import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getTransition } from './transition';

export const styleTransition = (
  className: string,
  { transition = 'fade' }: Classes
) =>
  mergeClasses(sharedStyles.transition[getTransition(transition)], className);
