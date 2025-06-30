import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getArrowVariant } from './variant';

export const styleUnstyledPopperArrow = (
  className: string,
  {
    variant = 'none',
    defaultPlacement = 'bottom',
    border = false,
    color = 'neutral'
  }: Classes
) =>
  mergeClasses(
    generic.styles.position.absolute,
    generic.styles.color.fill[color][
      getArrowVariant(variant, defaultPlacement, border)
    ],
    className
  );
