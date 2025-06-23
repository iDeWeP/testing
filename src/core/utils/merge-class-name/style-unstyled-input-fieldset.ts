import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './get-color';
import { getInputVariant } from './get-input-variant';
import { mergeClasses } from './merge-classes';

export const styleUnstyledInputFieldSet = (
  className: string,
  { disabled = false, inputVariant = 'default' }: Classes
) => {
  const { variant, bgVariant } = getInputVariant(inputVariant, disabled);

  return mergeClasses(
    unstyledInputConfig.styles.fieldset.default,
    unstyledInputConfig.styles.generic.variant[variant],
    generic.styles.color.bg[getColor(disabled, 'surface')][bgVariant],
    className
  );
};
