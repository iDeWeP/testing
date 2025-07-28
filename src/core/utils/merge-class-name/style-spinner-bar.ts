import { systemStyle } from '../../config/system-style';
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
    systemStyle.color.default.stroke[theme][
      getColor(variant, color, { disabled })[barType === 'bar' ? 'text' : 'bg']
    ],
    className
  );
