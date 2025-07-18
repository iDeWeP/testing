import type { RefObject } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak } from '../../types';

export const styleCollapse = (
  { isEntering, isEntered }: Animation,
  peak: Peak,
  transitions: string[],
  isIn: boolean,
  ref?: RefObject<HTMLElement | null>
) => {
  const isHorizontal = transitions[1] === 'x';
  const dimension = isHorizontal ? 'width' : 'height';

  if ((!isIn && isEntered) || isEntering) {
    const sizes = ref?.current?.firstElementChild?.getBoundingClientRect() ?? {
      width: '100%',
      height: '100%'
    };
    const length = isHorizontal ? sizes.width : sizes.height;

    return { [dimension]: peak === 'auto' ? length : peak };
  }

  if (isEntered) {
    return { [dimension]: peak === 'auto' ? 'auto' : peak };
  }

  return { [dimension]: '0px' };
};
