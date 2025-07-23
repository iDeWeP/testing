import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
import { getInputColor } from './get-input-color';
import { mergeClasses } from './merge-classes';

export const styleInputFieldset = (
  className: string,
  {
    inputType = 'input',
    theme = 'light',
    on = false,
    valid = false,
    invalid = false,
    disabled = false,
    inputVariant = 'default',
    color = 'unset'
  }: Classes
): ClassName => {
  const variantType = inputVariant === 'outlined' ? 'outlined' : 'default';

  return mergeClasses(
    on && sharedStyles.state.on,
    unstyledInputConfig.styles.fieldset.default,
    unstyledInputConfig.styles.shared.variant.default[variantType],
    unstyledInputConfig.styles.shared.variant[inputType][variantType],
    systemStyles.color.default.bg[theme][
      getInputColor(inputVariant, color, disabled, valid, invalid)
    ],
    className
  );
};
