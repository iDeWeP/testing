import type { CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import { setProp } from '../../../utils/utils/set-prop/set-prop';
import type { AnimationProps } from '../../types';

export const styleAnimation = (
  isIn: boolean,
  { isEntering, isEntered, isExiting, isExited }: Animation,
  duration: number,
  animationProps?: AnimationProps
): CSSProperties => {
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

  return {
    visibility: !isIn && isExited ? 'hidden' : 'visible',
    ...setProp(isEntered, animationProps?.enteredStyle),
    ...setProp(isEntering, animationProps?.enteringStyle),
    ...setProp(isExited, animationProps?.exitedStyle),
    ...setProp(isExiting, animationProps?.exitingStyle),
    ...style
  };
};
