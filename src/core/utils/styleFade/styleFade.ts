import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import type { Peak } from '../../types';
import { getNumPeak } from '../mergeTransitionStyle/getNumPeak';

export const styleFade = (
  { isEntering, isEntered }: Animation,
  peak: Peak
) => ({ opacity: isEntering || isEntered ? `${getNumPeak(peak)}%` : '0' });
