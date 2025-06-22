import type { Border } from '../../types';

export const getBorder = (border: Border) => {
  if (typeof border === 'string') {
    return border;
  }

  return border ? 'all' : 'none';
};
