import type { Border, DefaultVariant, DefaultBorder } from '../../../../types';

const getBorder = (
  border: Border,
  variant?: DefaultVariant,
  isDisabled?: boolean
): DefaultBorder => {
  if ((!isDisabled && variant === 'solid') || !border) {
    return 'none';
  }

  if (typeof border === 'string') {
    return border;
  }

  return 'all';
};

export default getBorder;
