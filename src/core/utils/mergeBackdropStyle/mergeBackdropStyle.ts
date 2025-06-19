import type { CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import type { Peak } from '../../types';
import { styleFade } from '../styleFade/styleFade';

export const mergeBackdropStyle = (
  isOpen: boolean,
  animation: Animation,
  peak: Peak,
  zIndex: number,
  style: CSSProperties = {}
): CSSProperties => ({
  ...styleFade(animation, peak),
  zIndex,
  visibility: !isOpen && animation.isExited ? 'hidden' : 'visible',
  ...style
});
