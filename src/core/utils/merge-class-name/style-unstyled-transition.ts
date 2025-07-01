import { unstyledTransitionConfig } from '../../components/UnstyledTransition/unstyledTransitionConfig';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getTransition } from './transition';

export const styleUnstyledTransition = (
  className: string,
  { transition = 'fade' }: Classes
) =>
  mergeClasses(
    unstyledTransitionConfig.styles.transition[getTransition(transition)],
    className
  );
