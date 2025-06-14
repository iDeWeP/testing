import type { Transition } from '../../types';

export const getTransition = (transition: Transition) => {
  const transitions = transition.split('-');

  if (transition[0] === 'fade') {
    return 'fade';
  } else if (transitions[transitions.length - 1] === 'fade') {
    return 'transform-fade';
  }

  return 'transform';
};
