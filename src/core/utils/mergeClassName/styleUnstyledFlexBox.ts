import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import mergeClasses from './mergeClasses';

export const styleUnstyledFlexBox = (
  className: string,
  {
    direction = 'row',
    wrap = 'wrap',
    justify = 'normal',
    align = 'stretch',
    gap = 'none'
  }: Classes
) =>
  mergeClasses(
    generic.styles.display.flex,
    generic.styles.direction[direction],
    generic.styles.wrap[wrap],
    generic.styles.justify[justify],
    generic.styles.align[align],
    generic.styles.gap.default[gap],
    className
  );
