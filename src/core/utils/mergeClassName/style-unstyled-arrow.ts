import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getArrowVariant } from './get-arrow-variant';
import { mergeClasses } from './merge-classes';

export const styleUnstyledArrow = (
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
