import type { RefObject } from 'react';
import type { Animation } from '../../../hooks/hooks/use-animation/use-animation';
import type { Peak, Scale } from '../../types';

export const styleCollapse = (
  { isEntering, isEntered }: Animation,
  peak: Peak,
  transitions: string[],
  ref: RefObject<HTMLElement | null>,
  isIn: boolean,
  scale: Scale
) => {
  const isHorizontal = transitions[1] === 'x';
  const dimension = isHorizontal ? 'width' : 'height';

  if ((!isIn && isEntered) || isEntering) {
    const sizes = ref.current?.firstElementChild?.getBoundingClientRect();
    const width = scale === 'full' ? '100%' : sizes?.width ?? 'auto';
    const length = isHorizontal ? width : sizes?.height ?? 'auto';

    return { [dimension]: peak === 'auto' ? length : peak };
  } else if (isEntered) {
    const width = scale === 'full' ? '100%' : 'auto';
    const length = isHorizontal ? width : 'auto';

    return { [dimension]: peak === 'auto' ? length : peak };
  } else {
    return { [dimension]: '0px' };
  }
};
