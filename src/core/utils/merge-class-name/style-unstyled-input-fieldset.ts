import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getInputColor, getDefaultColor } from './color';
import { mergeClasses } from './merge-classes';

export const styleUnstyledInputFieldset = (
  className: string,
  {
    inputType = 'input',
    theme = 'light',
    disabled = false,
    inputVariant = 'default',
    color = 'unset'
  }: Classes
) =>
  mergeClasses(
    unstyledInputConfig.styles.fieldset.default,
    unstyledInputConfig.styles.generic.variant.default[inputVariant],
    unstyledInputConfig.styles.generic.variant[inputType][inputVariant],
    systemStyles.color.bg[theme][
      getInputColor(inputVariant, getDefaultColor(color), disabled).bgColor
    ],
    className
  );
