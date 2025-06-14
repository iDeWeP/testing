import type { Border } from '../../types';

const getBorder = (border: Border) => {
  if (typeof border === 'string') {
    return border;
  }

  return border ? 'all' : 'none';
};

export default getBorder;
