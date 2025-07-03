import type { CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { AnimationProps } from '../../types';

export const styleAnimation = (
  isIn: boolean,
  { isEntering, isEntered, isExiting, isExited }: Animation,
  duration: number,
  animationProps?: AnimationProps
) => {
  const style: CSSProperties = {};

  const enterDuration = animationProps?.enterDuration ?? duration;
  const exitDuration = animationProps?.exitDuration ?? duration;
  const enterDelay = animationProps?.enterDelay ?? 0;
  const exitDelay = animationProps?.exitDelay ?? 0;

  if (isIn && enterDuration > 0) {
    style.transitionDuration = `${enterDuration}ms`;
  }

  if (!isIn && exitDuration > 0) {
    style.transitionDuration = `${exitDuration}ms`;
  }

  if (isIn && enterDelay > 0) {
    style.transitionDelay = `${enterDelay}ms`;
  }

  if (!isIn && exitDelay > 0) {
    style.transitionDelay = `${exitDelay}ms`;
  }

  if (isEntered && animationProps?.enteredStyle) {
    return { ...style, ...animationProps.enteredStyle };
  }

  if (isEntering && animationProps?.enteringStyle) {
    return { ...style, ...animationProps.enteringStyle };
  }

  if (isExited && animationProps?.exitedStyle) {
    return { ...style, ...animationProps.exitedStyle };
  }

  if (isExiting && animationProps?.exitingStyle) {
    return { ...style, ...animationProps.exitingStyle };
  }

  return style;
};
