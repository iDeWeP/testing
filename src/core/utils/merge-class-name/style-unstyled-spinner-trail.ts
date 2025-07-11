import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { isTrailTransparent } from './variant';

export const styleUnstyledSpinnerTrail = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    variant = 'text',
    color = 'unset'
  }: Classes
) =>
  mergeClasses(
    isTrailTransparent(variant)
      ? 'stroke-transparent'
      : systemStyles.color.stroke[theme][
          getColor(variant, color, disabled).bgColor
        ],
    className
  );
