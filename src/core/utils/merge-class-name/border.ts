import type { Border, DefaultBorder, DefaultPlacement } from '../../types';

const placementsMap = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top'
};

export const getBorder = (border: Border) =>
  typeof border === 'string' ? border : border ? 'all' : 'none';

export const isPopperBordered = (
  placement: DefaultPlacement,
  border: Border
) => {
  if (!border) {
    return false;
  }

  if (
    border === true ||
    border === 'all' ||
    (border.includes('x') && (placement === 'left' || placement === 'right')) ||
    (border.includes('y') && (placement === 'top' || placement === 'bottom'))
  ) {
    return true;
  }

  return border.includes(placementsMap[placement]);
};

export const isCheckboxBordered = (
  border?: Border,
  bx?: DefaultBorder,
  by?: DefaultBorder,
  bt?: DefaultBorder,
  bb?: DefaultBorder,
  bl?: DefaultBorder,
  br?: DefaultBorder
) =>
  border === 'auto' ||
  border === 'set' ||
  bx === 'set' ||
  by === 'set' ||
  bt === 'set' ||
  bb === 'set' ||
  bl === 'set' ||
  br === 'set';
