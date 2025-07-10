import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleUnstyledInputLabel = (
  className: string,
  { inputType = 'input', inputVariant = 'default', inputSize = 'md' }: Classes
) =>
  mergeClasses(
    unstyledInputConfig.styles.label.default,
    unstyledInputConfig.styles.generic.default,
    inputType === 'input' &&
      unstyledInputConfig.styles.label.variant.input[inputVariant][inputSize],
    inputType === 'textarea' &&
      unstyledInputConfig.styles.label.variant.textarea[inputVariant],
    className
  );
