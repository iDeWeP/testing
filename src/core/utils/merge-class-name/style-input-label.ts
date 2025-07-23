import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes, ClassName } from '../../types';
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
  const variantType = inputVariant === 'outlined' ? 'outlined' : 'default';

  return mergeClasses(
    unstyledInputConfig.styles.label.default,
    unstyledInputConfig.styles.shared.label,
    isInput &&
      unstyledInputConfig.styles.label.variant.input[variantType][inputSize],
    !isInput && unstyledInputConfig.styles.label.variant.textarea[variantType],
    systemStyles.gap.all[gap],
    className
  );
};
