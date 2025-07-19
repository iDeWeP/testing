import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
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
) => {
  const colorType = barType === 'bar' ? 'text' : 'bg';

  return mergeClasses(
    systemStyles.color.normal.stroke[theme][
      getColor(variant, color, disabled)[colorType]
    ],
    className
  );
};
