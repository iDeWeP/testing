import type { Border } from '../../types';

export const getBorder = (border: Border) =>
  typeof border === 'string' ? border : border ? 'all' : 'none';
