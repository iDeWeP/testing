import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { systemStyle } from '../../config/system-style';
import type { Classes, ClassName } from '../../types';
import { getInputVariant } from './get-input-variant';
import { mergeClasses } from './merge-classes';

export const styleInputLabel = (
  className: string,
  {
    inputType = 'input',
    inputVariant = 'default',
    inputSize = 'md',
    gap = 'unset'
  }: Classes
): ClassName => {
  const isInput = inputType === 'input';
  const autoVariant = getInputVariant(inputVariant);

  return mergeClasses(
    unstyledInputConfig.styles.label.default,
    unstyledInputConfig.styles.shared.label,
    isInput &&
      unstyledInputConfig.styles.label.variant.input[autoVariant][inputSize],
    !isInput && unstyledInputConfig.styles.label.variant.textarea[autoVariant],
    systemStyle.gap.all[gap],
    className
  );
};
