import type { CSSProperties, RefObject } from 'react';
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
  isIn: boolean,
  animation: Animation,
  peak: Peak,
  transition: Transition,
  duration: number,
  style?: CSSProperties,
  animationProps?: AnimationProps,
  ref?: RefObject<HTMLElement | null>
): CSSProperties => {
  const transitions = transition.split('-');

  return {
    ...styleAnimation(isIn, animation, duration, animationProps),
    ...getFadeStyle(animation, peak, transitions),
    ...setStyle[transitions[0] as keyof typeof setStyle](
      animation,
      peak,
      transitions,
      isIn,
      ref
    ),
    ...style
  };
};
