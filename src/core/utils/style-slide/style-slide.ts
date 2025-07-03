import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak } from '../../types';
import { getPeak } from '../get-peak/get-peak';

const placements = {
  top: ({ isEntering, isEntered }: Animation, peak: Peak) => ({
    transform:
      isEntering || isEntered
        ? 'translateY(0%)'
        : `translateY(-${getPeak(peak)}%)`
  }),
  bottom: ({ isEntering, isEntered }: Animation, peak: Peak) => ({
    transform:
      isEntering || isEntered
        ? 'translateY(0%)'
        : `translateY(${getPeak(peak)}%)`
  }),
  left: ({ isEntering, isEntered }: Animation, peak: Peak) => ({
    transform:
      isEntering || isEntered
        ? 'translateX(0%)'
        : `translateX(-${getPeak(peak)}%)`
  }),
  right: ({ isEntering, isEntered }: Animation, peak: Peak) => ({
    transform:
      isEntering || isEntered
        ? 'translateX(0%)'
        : `translateX(${getPeak(peak)}%)`
  })
};

export const styleSlide = (
  animation: Animation,
  peak: Peak,
  transitions: string[]
) => placements[transitions[1] as keyof typeof placements](animation, peak);
