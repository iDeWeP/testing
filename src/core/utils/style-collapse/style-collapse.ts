import type { RefObject } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak } from '../../types';

export const styleCollapse = (
  { isEntering, isEntered }: Animation,
  peak: Peak,
  transitions: string[],
  ref: RefObject<HTMLElement | null>,
  isIn: boolean
) => {
  const isHorizontal = transitions[1] === 'x';
  const dimension = isHorizontal ? 'width' : 'height';

  if ((!isIn && isEntered) || isEntering) {
    const sizes = ref.current?.firstElementChild?.getBoundingClientRect();
    const length = isHorizontal
      ? sizes?.width ?? 'auto'
      : sizes?.height ?? 'auto';

    return { [dimension]: peak === 'auto' ? length : peak };
  }

  if (isEntered) {
    return { [dimension]: peak === 'auto' ? 'auto' : peak };
  }

  return { [dimension]: '0px' };
};
