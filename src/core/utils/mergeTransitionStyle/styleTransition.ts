import type { CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import type { TransitionProps } from '../../types';

export const styleTransition = (
  isIn: boolean,
  { isEntering, isEntered, isExiting, isExited }: Animation,
  duration: number,
  transitionProps?: TransitionProps
) => {
  const style: CSSProperties = {};

  const enterDuration = transitionProps?.enterDuration ?? duration;
  const exitDuration = transitionProps?.exitDuration ?? duration;

  if (isIn && enterDuration > 0) {
    style.transitionDuration = `${enterDuration}ms`;
  } else if (!isIn && exitDuration > 0) {
    style.transitionDuration = `${exitDuration}ms`;
  }

  const enterDelay = transitionProps?.enterDelay ?? 0;
  const exitDelay = transitionProps?.exitDelay ?? 0;

  if (isIn && enterDelay > 0) {
    style.transitionDelay = `${enterDelay}ms`;
  } else if (!isIn && exitDelay > 0) {
    style.transitionDelay = `${exitDelay}ms`;
  }

  if (isEntered && transitionProps?.enteredStyle) {
    return { ...style, ...transitionProps.enteredStyle };
  }

  if (isEntering && transitionProps?.enteringStyle) {
    return { ...style, ...transitionProps.enteringStyle };
  }

  if (isExited && transitionProps?.exitedStyle) {
    return { ...style, ...transitionProps.exitedStyle };
  }

  if (isExiting && transitionProps?.exitingStyle) {
    return { ...style, ...transitionProps.exitingStyle };
  }

  return style;
};
