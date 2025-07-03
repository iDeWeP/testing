import type { RefObject, CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak, Transition, AnimationProps } from '../../types';
import { getFadeStyle } from '../get-fade-style/get-fade-style';
import { styleAnimation } from '../style-animation/style-animation';
import { styleCollapse } from '../style-collapse/style-collapse';
import { styleFade } from '../style-fade/style-fade';
import { styleGrow } from '../style-grow/style-grow';
import { styleSlide } from '../style-slide/style-slide';

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
  transition: Transition,
  duration: number,
  style?: CSSProperties,
  animationProps?: AnimationProps
): CSSProperties => {
  const transitions = transition.split('-');

  return {
    visibility: !isIn && animation.isExited ? 'hidden' : 'visible',
    ...styleAnimation(isIn, animation, duration, animationProps),
    ...getFadeStyle(animation, peak, transitions),
    ...setStyle[transitions[0] as keyof typeof setStyle](
      animation,
      peak,
      transitions,
      ref,
      isIn
    ),
    ...style
  };
};
