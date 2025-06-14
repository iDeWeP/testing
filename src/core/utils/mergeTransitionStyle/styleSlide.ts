import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import type { Peak } from '../../types';
import { getNumPeak } from './getNumPeak';

export const styleSlide = (
  { isEntering, isEntered }: Animation,
  peak: Peak,
  transitions: string[]
) => {
  const placement = transitions[1];

  if (placement === 'top') {
    return {
      transform:
        isEntering || isEntered
          ? 'translateY(0%)'
          : `translateY(-${getNumPeak(peak)}%)`
    };
  } else if (placement === 'bottom') {
    return {
      transform:
        isEntering || isEntered
          ? 'translateY(0%)'
          : `translateY(${getNumPeak(peak)}%)`
    };
  } else if (placement === 'left') {
    return {
      transform:
        isEntering || isEntered
          ? 'translateX(0%)'
          : `translateX(-${getNumPeak(peak)}%)`
    };
  } else if (placement === 'right') {
    return {
      transform:
        isEntering || isEntered
          ? 'translateX(0%)'
          : `translateX(${getNumPeak(peak)}%)`
    };
  }

  return {};
};
