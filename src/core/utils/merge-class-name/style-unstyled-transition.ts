import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getTransition } from './transition';

export const styleUnstyledTransition = (
  className: string,
  { transition = 'fade' }: Classes
) =>
  mergeClasses(generic.styles.transition[getTransition(transition)], className);
