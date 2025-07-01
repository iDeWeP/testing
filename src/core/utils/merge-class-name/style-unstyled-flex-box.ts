import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleUnstyledFlexBox = (
  className: string,
  {
    direction = 'row',
    wrap = 'nowrap',
    justifyContent = 'normal',
    alignItems = 'stretch',
    gap = 'none'
  }: Classes
) =>
  mergeClasses(
    generic.styles.display.flex,
    generic.styles.direction[direction],
    generic.styles.wrap[wrap],
    generic.styles.justifyContent[justifyContent],
    generic.styles.alignItems[alignItems],
    generic.styles.gap.default[gap],
    className
  );
