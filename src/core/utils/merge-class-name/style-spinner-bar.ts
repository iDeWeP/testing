import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { getColor } from './get-color';
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
): ClassName =>
  mergeClasses(
    systemStyles.color.default.stroke[theme][
      getColor(variant, color, { disabled })[barType === 'bar' ? 'text' : 'bg']
    ],
    className
  );
