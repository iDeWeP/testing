import type { CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak, PopperTransition, AnimationProps } from '../../types';
import { getFadeStyle } from '../get-fade-style/get-fade-style';
import { styleAnimation } from '../style-animation/style-animation';
import { styleFade } from '../style-fade/style-fade';
import { styleGrow } from '../style-grow/style-grow';

const setStyle = {
  fade: styleFade,
  grow: styleGrow
};

export const mergePopperStyle = (
  isOpen: boolean,
  animation: Animation,
  peak: Peak,
  top: number,
  left: number,
  zIndex: number,
  transition: PopperTransition,
  duration: number,
  style?: CSSProperties,
  animationProps?: AnimationProps
): CSSProperties => {
  const transitions = transition.split('-');

  return {
    top,
    left,
    zIndex,
    visibility: !isOpen && animation.isExited ? 'hidden' : 'visible',
    ...styleAnimation(isOpen, animation, duration, animationProps),
    ...getFadeStyle(animation, peak, transitions),
    ...setStyle[transitions[0] as keyof typeof setStyle](animation, peak),
    ...style
  };
};
