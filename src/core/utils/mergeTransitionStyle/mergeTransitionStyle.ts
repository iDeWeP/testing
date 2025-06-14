import type { RefObject, CSSProperties } from 'react';
import type { Peak, Scale, Transition, TransitionProps } from '../../types';
import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import { styleTransition } from './styleTransition';
import { styleFade } from './styleFade';
import { styleGrow } from './styleGrow';
import { styleSlide } from './styleSlide';
import { styleCollapse } from './styleCollapse';

const setStyle = {
  collapse: styleCollapse,
  fade: styleFade,
  grow: styleGrow,
  slide: styleSlide
};

export const mergeTransitionStyle = (
  ref: RefObject<HTMLElement | null>,
  isIn: boolean,
  animation: Animation,
  scale: Scale,
  peak: Peak,
  transition: Transition,
  duration: number,
  style: CSSProperties,
  transitionProps: TransitionProps
): CSSProperties => {
  const transitions = transition.split('-');

  return {
    ...styleTransition(isIn, animation, duration, transitionProps),
    ...setStyle[transitions[0] as keyof typeof setStyle](
      animation,
      peak,
      transitions,
      ref,
      isIn,
      scale
    ),
    visibility: !isIn && animation.isExited ? 'hidden' : 'visible',
    ...style
  };
};
