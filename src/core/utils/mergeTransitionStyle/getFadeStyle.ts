import type { Animation } from '../../../hooks/hooks/use-animation/useAnimation';
import type { Peak } from '../../types';
import { styleFade } from '../styleFade/styleFade';

export const getFadeStyle = (
  animation: Animation,
  peak: Peak,
  transitions: string[]
) =>
  transitions[0] !== 'fade' && transitions[transitions.length - 1] === 'fade'
    ? styleFade(animation, peak)
    : {};
