import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getTrailVariant } from './variant';

export const styleUnstyledSpinnerTrail = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    variant = 'none',
    color = 'neutral'
  }: Classes
) => {
  const colorVariant = getTrailVariant(variant);

  return mergeClasses(
    colorVariant === 'none'
      ? 'stroke-transparent'
      : generic.styles.color.stroke[theme][getColor(color, disabled)][
          getTrailVariant(variant, disabled)
        ],
    className
  );
};
