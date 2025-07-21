import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { systemStyles } from '../../config/system-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleInputLabel = (
  className: string,
  {
    inputType = 'input',
    inputVariant = 'default',
    inputSize = 'md',
    gap = 'unset'
  }: Classes
) =>
  mergeClasses(
    unstyledInputConfig.styles.label.default,
    unstyledInputConfig.styles.shared.label,
    inputType === 'input' &&
      unstyledInputConfig.styles.label.variant.input[inputVariant][inputSize],
    inputType === 'textarea' &&
      unstyledInputConfig.styles.label.variant.textarea[inputVariant],
    systemStyles.gap.all[gap],
    className
  );
