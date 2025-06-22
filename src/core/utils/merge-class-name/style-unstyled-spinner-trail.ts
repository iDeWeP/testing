import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './get-color';
import { getTrailVariant } from './get-trail-variant';
import { mergeClasses } from './merge-classes';

export const styleUnstyledSpinnerTrail = (
  className: string,
  { disabled = false, variant = 'none', color = 'neutral' }: Classes
) => {
  const colorVariant = getTrailVariant(variant);

  return mergeClasses(
    colorVariant === 'none'
      ? 'stroke-transparent'
      : generic.styles.color.stroke[getColor(disabled, color)][colorVariant],
    className
  );
};
