import type { Border, DefaultBorder } from '../../../../types';

const getBorder = (border: Border): DefaultBorder => {
  if (typeof border === 'string') {
    return border;
  }

  return border ? 'all' : 'none';
};

export default getBorder;
