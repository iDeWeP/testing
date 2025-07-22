import type { Peak } from '../../types';

export const getPeak = (peak: Peak): Peak => (peak === 'auto' ? 100 : peak);
