import type { CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak } from '../../types';
import { styleFade } from '../style-fade/style-fade';

export const getFadeStyle = (
  animation: Animation,
  peak: Peak,
  transitions: string[]
): CSSProperties | undefined => {
  const lastIdx = transitions.length - 1;

  if (lastIdx !== 0 && transitions[lastIdx] === 'fade') {
    return styleFade(animation, peak);
  }
};
