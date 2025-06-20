import type { CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak, TransitionProps } from '../../types';
import { styleFade } from '../styleFade/styleFade';
import { styleTransition } from '../styleTransition/styleTransition';

export const mergeBackdropStyle = (
  isOpen: boolean,
  animation: Animation,
  peak: Peak,
  zIndex: number,
  duration: number,
  style?: CSSProperties,
  transitionProps?: TransitionProps
): CSSProperties => ({
  zIndex,
  visibility: !isOpen && animation.isExited ? 'hidden' : 'visible',
  ...styleTransition(isOpen, animation, duration, transitionProps),
  ...styleFade(animation, peak),
  ...style
});
