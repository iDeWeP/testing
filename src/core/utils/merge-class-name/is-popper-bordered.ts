import type { DefaultPlacement, Border } from '../../types';

const placementsMap = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top'
};

export const isPopperBordered = (
  placement: DefaultPlacement,
  border: Border
) => {
  if (!border) {
    return false;
  }

  if (border === true || border === 'all') {
    return true;
  }

  if (border.includes('x') && (placement === 'left' || placement === 'right')) {
    return true;
  }

  if (border.includes('y') && (placement === 'top' || placement === 'bottom')) {
    return true;
  }

  return border.includes(placementsMap[placement]);
};
