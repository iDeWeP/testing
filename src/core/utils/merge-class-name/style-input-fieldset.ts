import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { getInputColor } from './get-input-color';
import { mergeClasses } from './merge-classes';

export const styleInputFieldset = (
  className: string,
  {
    inputType = 'input',
    theme = 'light',
    disabled = false,
    inputVariant = 'default'
  }: Classes
) =>
  mergeClasses(
    unstyledInputConfig.styles.fieldset.default,
    unstyledInputConfig.styles.generic.variant.default[inputVariant],
    unstyledInputConfig.styles.generic.variant[inputType][inputVariant],
    systemStyles.color.normal.bg[theme][getInputColor(inputVariant, disabled)],
    className
  );
