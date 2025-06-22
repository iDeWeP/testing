import type { CollapseTransition, Transition } from '../../types';

export const getTransition = (transition: Transition) => {
  const transitions = transition.split('-');

  if (transitions[0] === 'fade') {
    return 'fade';
  } else if (transitions[0] === 'collapse') {
    return transition as CollapseTransition;
  }

  return transitions[transitions.length - 1] === 'fade'
    ? 'transform-fade'
    : 'transform';
};
