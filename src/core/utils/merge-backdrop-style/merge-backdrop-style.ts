import type { CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak, AnimationProps } from '../../types';
import { styleAnimation } from '../style-animation/style-animation';
import { styleFade } from '../style-fade/style-fade';

export const mergeBackdropStyle = (
  isOpen: boolean,
  animation: Animation,
  peak: Peak,
  zIndex: number,
  duration: number,
  style?: CSSProperties,
  animationProps?: AnimationProps
): CSSProperties => ({
  zIndex,
  visibility: !isOpen && animation.isExited ? 'hidden' : 'visible',
  ...styleAnimation(isOpen, animation, duration, animationProps),
  ...styleFade(animation, peak),
  ...style
});
