import type { CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak } from '../../types';
import { getPeak } from '../get-peak/get-peak';

export const styleFade = (
  { isEntering, isEntered }: Animation,
  peak: Peak
): CSSProperties => ({
  opacity: isEntering || isEntered ? `${getPeak(peak)}%` : '0'
});
