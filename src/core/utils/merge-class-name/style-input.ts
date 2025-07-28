import { unstyledInputConfig } from '../../components/UnstyledInput/unstyledInputConfig';
import { sharedStyle } from '../../config/shared-style';
import type { Classes, ClassName } from '../../types';
import { mergeClasses } from './merge-classes';

export const styleInput = (
  className: string,
  {
    inputType = 'input',
    disabled = false,
    inputSize = 'md',
    resize = false
  }: Classes
): ClassName => {
  const isTextarea = inputType === 'textarea';

  return mergeClasses(
    unstyledInputConfig.styles.input.default,
    isTextarea && unstyledInputConfig.styles.input.size[inputSize],
    isTextarea && !resize && unstyledInputConfig.styles.input.stable,
    disabled && sharedStyle.cursor.disabled,
    className
  );
};
