import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';

export const styleUnstyledSpinnerBar = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    variant = 'text',
    color = 'unset'
  }: Classes
) =>
  mergeClasses(
    systemStyles.color.stroke[theme][
      getColor(variant, color, disabled).textColor
    ],
    className
  );
