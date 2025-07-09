import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleUnstyledInputLabel = (
  className: string,
  { inputVariant = 'default', inputSize = 'md' }: Classes
) =>
  mergeClasses(
    sharedStyles.inputLabel.default,
    sharedStyles.inputGeneric.default,
    unstyledInputConfig.styles.label.variant[inputVariant][inputSize],
    className
  );
