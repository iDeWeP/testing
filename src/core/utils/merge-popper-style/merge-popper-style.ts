import type { CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak, DefaultTransition, AnimationProps } from '../../types';
import { mergeDefaultTransitionStyle } from '../merge-default-transition-style/merge-default-transition-style';

export const mergePopperStyle = (
  isOpen: boolean,
  animation: Animation,
  peak: Peak,
  top: number,
  left: number,
  zIndex: number,
  transition: DefaultTransition,
  duration: number,
  style?: CSSProperties,
  animationProps?: AnimationProps
): CSSProperties => ({
  top,
  left,
  zIndex,
  ...mergeDefaultTransitionStyle(
    isOpen,
    animation,
    peak,
    transition,
    duration,
    style,
    animationProps
  )
});
