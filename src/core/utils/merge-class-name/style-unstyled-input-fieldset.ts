import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getColor } from './color';
import { mergeClasses } from './merge-classes';
import { getInputVariant } from './variants';

export const styleUnstyledInputFieldSet = (
  className: string,
  { disabled = false, inputVariant = 'default', labeled = false }: Classes
) => {
  const { variant, bgVariant } = getInputVariant(inputVariant, disabled);

  return mergeClasses(
    unstyledInputConfig.styles.fieldset.default,
    labeled && generic.styles.position.relative,
    unstyledInputConfig.styles.generic.variant[variant],
    generic.styles.color.bg[getColor('surface', disabled)][bgVariant],
    className
  );
};
