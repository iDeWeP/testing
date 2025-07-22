import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyles } from '../../config/shared-styles';
import type { Classes } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleInput = (
  className: string,
  {
    inputType = 'input',
    disabled = false,
    inputSize = 'md',
    resize = false
  }: Classes
) => {
  const isTextarea = inputType === 'textarea';

  return mergeClasses(
    unstyledInputConfig.styles.input.default,
    isTextarea && unstyledInputConfig.styles.input.size[inputSize],
    isTextarea && !resize && unstyledInputConfig.styles.input.stable,
    disabled && sharedStyles.cursor.disabled,
    className
  );
};
