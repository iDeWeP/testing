import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getColor, getDefaultColor } from './color';
import { mergeClasses } from './merge-classes';
import { getInputSize } from './spacing';

export const styleUnstyledInputContainer = (
  className: string,
  {
    theme = 'light',
    focused = false,
    shifted = false,
    valid = false,
    invalid = false,
    disabled = false,
    inputVariant = 'default',
    inputSize = 'md',
    margin = 'unset',
    mx = 'unset',
    my = 'unset',
    mt = 'unset',
    mb = 'unset',
    ml = 'unset',
    mr = 'unset',
    color = 'unset'
  }: Classes
) => {
  const { textColor } = getColor(
    'text',
    getDefaultColor(color),
    disabled,
    valid,
    invalid
  );

  return mergeClasses(
    focused && sharedStyles.inputContainer.focused,
    shifted && sharedStyles.inputContainer.shifted,
    sharedStyles.inputContainer.default,
    systemStyles.size.normal.normal[getInputSize(inputSize)],
    systemStyles.margin.all[margin],
    systemStyles.margin.x[mx],
    systemStyles.margin.y[my],
    systemStyles.margin.t[mt],
    systemStyles.margin.b[mb],
    systemStyles.margin.l[ml],
    systemStyles.margin.r[mr],
    inputVariant === 'outlined' && systemStyles.border.all,
    systemStyles.color.text[theme][textColor],
    systemStyles.color.fill[theme][textColor],
    systemStyles.color.focused[theme][
      getColor('text', color, disabled, valid, invalid).textColor
    ],
    disabled && sharedStyles.focusable.disabled,
    className
  );
};
