import type { CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak, DefaultTransition, AnimationProps } from '../../types';
import { getFadeStyle } from '../get-fade-style/get-fade-style';
import { styleAnimation } from '../style-animation/style-animation';
import { styleFade } from '../style-fade/style-fade';
import { styleGrow } from '../style-grow/style-grow';

const setStyle = {
  fade: styleFade,
  grow: styleGrow
};

export const mergeDefaultTransitionStyle = (
  isIn: boolean,
  animation: Animation,
  peak: Peak,
  transition: DefaultTransition,
  duration: number,
  style?: CSSProperties,
  animationProps?: AnimationProps
): CSSProperties => {
  const transitions = transition.split('-');

  return {
    visibility: !isIn && animation.isExited ? 'hidden' : 'visible',
    ...styleAnimation(isIn, animation, duration, animationProps),
    ...getFadeStyle(animation, peak, transitions),
    ...setStyle[transitions[0] as keyof typeof setStyle](animation, peak),
    ...style
  };
};
