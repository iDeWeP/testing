import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyles } from '../../config/shared-styles';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
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
) =>
  mergeClasses(
    on && sharedStyles.state.on,
    unstyledInputConfig.styles.fieldset.default,
    unstyledInputConfig.styles.shared.variant.default[inputVariant],
    unstyledInputConfig.styles.shared.variant[inputType][inputVariant],
    systemStyles.color.normal.bg[theme][
      getInputColor(inputVariant, color, disabled, valid, invalid)
    ],
    className
  );
