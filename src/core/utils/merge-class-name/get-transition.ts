import type { Transition } from '../../types';

export const getTransition = (transition: Transition) => {
  const transitions = transition.split('-');

  if (transitions[0] === 'fade') {
    return 'fade';
  }

  if (transitions[0] === 'collapse') {
    return transition;
  }

  if (transitions[transitions.length - 1] === 'fade') {
    return 'transform-fade';
  }

  return 'transform';
};
