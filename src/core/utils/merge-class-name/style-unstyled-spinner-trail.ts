import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getTrailVariant } from './variant';

export const styleUnstyledSpinnerTrail = (
  className: string,
  { disabled = false, variant = 'none', color = 'neutral' }: Classes
) =>
  mergeClasses(
    generic.styles.color.stroke[getColor(color, disabled)][
      getTrailVariant(variant)
    ],
    className
  );
