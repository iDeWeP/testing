import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { generic } from '../../config/generic';
import type { Classes } from '../../types';
import { getInputVariant } from './get-input-variant';
import { mergeClasses } from './merge-classes';

export const styleUnstyledInputLabel = (
  className: string,
  { inputVariant = 'default', inputSize = 'md', labeled = false }: Classes
) =>
  mergeClasses(
    unstyledInputConfig.styles.label.default,
    labeled && generic.styles.position.relative,
    unstyledInputConfig.styles.label.variant[
      getInputVariant(inputVariant).variant
    ][inputSize],
    className
  );
