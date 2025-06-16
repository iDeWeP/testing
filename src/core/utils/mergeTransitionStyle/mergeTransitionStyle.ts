import type { RefObject, CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import type { Scale, Peak, Transition, TransitionProps } from '../../types';
import { styleTransition } from '../styleTransition/styleTransition';
import { styleCollapse } from './styleCollapse';
import { styleFade } from './styleFade';
import { styleGrow } from './styleGrow';
import { styleSlide } from './styleSlide';

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
  peak: Peak,
  scale: Scale,
  transition: Transition,
  duration: number,
  style: CSSProperties,
  transitionProps: TransitionProps
): CSSProperties => {
  const transitions = transition.split('-');

  return {
    ...styleTransition(isIn, animation, duration, transitionProps),
    ...(transitions[0] !== 'fade' &&
    transitions[transitions.length - 1] === 'fade'
      ? setStyle.fade(animation, peak, transitions)
      : {}),
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
