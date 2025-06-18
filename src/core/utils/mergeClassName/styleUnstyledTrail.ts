import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './getColor';
import { getTrailVariant } from './getTrailVariant';
import mergeClasses from './mergeClasses';

export const styleUnstyledTrail = (
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
