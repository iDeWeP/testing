import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getArrowVariant } from './getArrowVariant';
import mergeClasses from './mergeClasses';

export const styleUnstyledArrow = (
  className: string,
  {
    variant = 'surface',
    placement = 'bottom',
    border = false,
    color = 'primary'
  }: Classes
) =>
  mergeClasses(
    generic.styles.position.absolute,
    generic.styles.color.fill[color][
      getArrowVariant(variant, placement, border)
    ],
    className
  );
