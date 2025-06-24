import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getTrailVariant } from './variants';

export const styleUnstyledSpinnerTrail = (
  className: string,
  { disabled = false, variant = 'none', color = 'neutral' }: Classes
) => {
  const colorVariant = getTrailVariant(variant);

  return mergeClasses(
    colorVariant === 'none'
      ? 'stroke-transparent'
      : generic.styles.color.stroke[getColor(color, disabled)][colorVariant],
    className
  );
};
