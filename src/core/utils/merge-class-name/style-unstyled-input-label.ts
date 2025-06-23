import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import type { Classes } from '../../types';
import { getInputVariant } from './get-input-variant';
import { mergeClasses } from './merge-classes';

export const styleUnstyledInputLabel = (
  className: string,
  { inputVariant = 'default', inputSize = 'md' }: Classes
) =>
  mergeClasses(
    unstyledInputConfig.styles.label.default,
    unstyledInputConfig.styles.label.variant[
      getInputVariant(inputVariant).variant
    ][inputSize],
    className
  );
