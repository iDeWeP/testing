import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getDirection } from './get-direction';
import { mergeClasses } from './merge-classes';

export const styleUnstyledPaper = (
  className: string,
  {
    orientation = 'horizontal',
    shadow = 'none',
    justifyContent = 'normal',
    alignItems = 'stretch',
    gap = 'none'
  }: Classes
) =>
  mergeClasses(
    generic.styles.display.flex,
    generic.styles.direction[getDirection(orientation)],
    generic.styles.shadow[shadow],
    generic.styles.justifyContent[justifyContent],
    generic.styles.alignItems[alignItems],
    generic.styles.gap.default[gap],
    className
  );
