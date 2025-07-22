import type { CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { DefaultPlacement, Peak } from '../../types';
import { getPeak } from '../get-peak/get-peak';

type PlacementMap = Record<
  DefaultPlacement,
  (animation: Animation, peak: Peak) => CSSProperties
>;

const placementMap: PlacementMap = {
  top: ({ isEntering, isEntered }, peak): CSSProperties => ({
    transform:
      isEntering || isEntered
        ? 'translateY(0%)'
        : `translateY(-${getPeak(peak)}%)`
  }),
  bottom: ({ isEntering, isEntered }, peak): CSSProperties => ({
    transform:
      isEntering || isEntered
        ? 'translateY(0%)'
        : `translateY(${getPeak(peak)}%)`
  }),
  left: ({ isEntering, isEntered }, peak): CSSProperties => ({
    transform:
      isEntering || isEntered
        ? 'translateX(0%)'
        : `translateX(-${getPeak(peak)}%)`
  }),
  right: ({ isEntering, isEntered }, peak): CSSProperties => ({
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
): CSSProperties =>
  placementMap[transitions[1] as keyof typeof placementMap](animation, peak);
