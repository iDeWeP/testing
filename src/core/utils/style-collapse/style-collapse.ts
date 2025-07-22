import type { RefObject, CSSProperties } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak } from '../../types';

export const styleCollapse = (
  { isEntering, isEntered }: Animation,
  peak: Peak,
  transitions: string[],
  isIn: boolean,
  ref?: RefObject<HTMLElement | null>
): CSSProperties => {
  const isHorizontal = transitions[1] === 'x';
  const dimension = isHorizontal ? 'width' : 'height';

  if ((!isIn && isEntered) || isEntering) {
    const size = ref?.current?.firstElementChild?.getBoundingClientRect() ?? {
      width: '100%',
      height: '100%'
    };
    const length = isHorizontal ? size.width : size.height;

    return { [dimension]: peak === 'auto' ? length : peak };
  }

  if (isEntered) {
    return { [dimension]: peak === 'auto' ? 'auto' : peak };
  }

  return { [dimension]: '0px' };
};
