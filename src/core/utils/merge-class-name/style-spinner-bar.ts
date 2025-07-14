import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor, getSpinnerColorType } from './color';
import { mergeClasses } from './merge-classes';

export const styleSpinnerBar = (
  className: string,
  {
    barType = 'bar',
    theme = 'light',
    disabled = false,
    variant = 'text',
    color = 'unset'
  }: Classes
) =>
  mergeClasses(
    systemStyles.color.stroke[theme][
      getColor(variant, color, disabled)[getSpinnerColorType(barType)]
    ],
    className
  );
