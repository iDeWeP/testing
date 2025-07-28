import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyle } from '../../config/shared-style';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getInputColor } from './get-input-color';
import { getInputVariant } from './get-input-variant';
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
  const autoVariant = getInputVariant(inputVariant);

  return mergeClasses(
    on && sharedStyle.state.on,
    unstyledInputConfig.styles.shared.body,
    unstyledInputConfig.styles.shared.variant.default[autoVariant],
    unstyledInputConfig.styles.shared.variant[inputType][autoVariant],
    systemStyle.color.default.bg[theme][
      getInputColor(valid, invalid, disabled, inputVariant, color)
    ],
    className
  );
};
