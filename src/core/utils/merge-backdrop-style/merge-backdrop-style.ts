import type { CSSProperties, RefObject } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak, Transition, AnimationProps } from '../../types';
import { mergeTransitionStyle } from '../merge-transition-style/merge-transition-style';

export const mergeBackdropStyle = (
  isOpen: boolean,
  animation: Animation,
  peak: Peak,
  zIndex: number,
  transition: Transition,
  duration: number,
  style?: CSSProperties,
  animationProps?: AnimationProps,
  ref?: RefObject<HTMLElement | null>
): CSSProperties => ({
  zIndex,
  ...mergeTransitionStyle(
    isOpen,
    animation,
    peak,
    transition,
    duration,
    style,
    animationProps,
    ref
  )
});
