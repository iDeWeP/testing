import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getTransition } from './getTransition';
import mergeClasses from './mergeClasses';

export const styleUnstyledTransition = (
  className: string,
  { transition = 'fade' }: Classes
) =>
  mergeClasses(generic.styles.transition[getTransition(transition)], className);
