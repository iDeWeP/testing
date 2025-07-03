import type { RefObject, CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak, Scale, Transition, TransitionProps } from '../../types';
import { getFadeStyle } from '../get-fade-style/get-fade-style';
import { styleCollapse } from '../style-collapse/style-collapse';
import { styleFade } from '../style-fade/style-fade';
import { styleGrow } from '../style-grow/style-grow';
import { styleSlide } from '../style-slide/style-slide';
import { styleTransition } from '../style-transition/style-transition';

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
  style?: CSSProperties,
  transitionProps?: TransitionProps
): CSSProperties => {
  const transitions = transition.split('-');

  return {
    visibility: !isIn && animation.isExited ? 'hidden' : 'visible',
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
    ...style
  };
};
