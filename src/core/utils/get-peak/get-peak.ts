import type { Peak } from '../../types';

export const getPeak = (peak: Peak) => (peak === 'auto' ? 100 : peak);
