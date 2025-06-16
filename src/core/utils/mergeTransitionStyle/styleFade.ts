import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import type { Peak } from '../../types';
import { getNumPeak } from './getNumPeak';

export const styleFade = (
  { isEntering, isEntered }: Animation,
  peak: Peak,
  transitions: string[]
) => {
  const opacity = transitions[0] === 'fade' ? getNumPeak(peak) : 100;

  return { opacity: isEntering || isEntered ? `${opacity}%` : '0' };
};
