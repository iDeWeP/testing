import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getTransition } from './get-transition';
import { mergeClasses } from './merge-classes';

export const styleUnstyledTransition = (
  className: string,
  { transition = 'fade' }: Classes
) =>
  mergeClasses(generic.styles.transition[getTransition(transition)], className);
