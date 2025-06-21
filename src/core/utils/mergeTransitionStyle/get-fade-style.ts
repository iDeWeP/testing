import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak } from '../../types';
import { styleFade } from '../style-fade/style-fade';

export const getFadeStyle = (
  animation: Animation,
  peak: Peak,
  transitions: string[]
) =>
  transitions[0] !== 'fade' && transitions[transitions.length - 1] === 'fade'
    ? styleFade(animation, peak)
    : {};
