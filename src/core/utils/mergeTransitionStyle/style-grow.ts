import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak } from '../../types';
import { getPeak } from '../get-peak/get-peak';

export const styleGrow = (
  { isEntering, isEntered }: Animation,
  peak: Peak
) => ({
  transform: isEntering || isEntered ? `scale(${getPeak(peak)}%)` : 'scale(0%)'
});
