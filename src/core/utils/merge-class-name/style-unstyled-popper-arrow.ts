import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';
import { getArrowVariant } from './variants';

export const styleUnstyledPopperArrow = (
  className: string,
  {
    variant = 'surface',
    defaultPlacement = 'bottom',
    border = false,
    color = 'primary'
  }: Classes
) =>
  mergeClasses(
    generic.styles.position.absolute,
    generic.styles.color.fill[color][
      getArrowVariant(variant, defaultPlacement, border)
    ],
    className
  );
