import type { RefObject, CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import type { Peak, Scale, Transition, TransitionProps } from '../../types';
import { styleTransition } from '../styleTransition/styleTransition';
import { getFadeStyle } from './getFadeStyle';
import { styleCollapse } from './styleCollapse';
import { styleFade } from '../styleFade/styleFade';
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
  style: CSSProperties = {},
  transitionProps: TransitionProps
): CSSProperties => {
  const transitions = transition.split('-');

  return {
    ...styleTransition(isIn, animation, duration, transitionProps),
    ...getFadeStyle(animation, peak, transitions),
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
