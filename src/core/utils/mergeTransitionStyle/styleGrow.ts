import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import type { Peak } from '../../types';
import { getNumPeak } from './getNumPeak';

export const styleGrow = (
  { isEntering, isEntered }: Animation,
  peak: Peak
) => ({
  transform:
    isEntering || isEntered ? `scale(${getNumPeak(peak)}%)` : 'scale(0%)'
});
