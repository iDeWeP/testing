import type { Peak } from '../../types';

export const getNumPeak = (peak: Peak) => (peak === 'auto' ? 100 : peak);
