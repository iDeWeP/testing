import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getDefaultColor, getInputColor } from './color';
import { mergeClasses } from './merge-classes';

export const styleUnstyledInputFieldset = (
  className: string,
  {
    theme = 'light',
    disabled = false,
    inputVariant = 'default',
    color = 'unset'
  }: Classes
) =>
  mergeClasses(
    sharedStyles.inputFieldset.default,
    sharedStyles.inputGeneric.variant[inputVariant],
    systemStyles.color.bg[theme][
      getInputColor(inputVariant, getDefaultColor(color), disabled).bgColor
    ],
    className
  );
