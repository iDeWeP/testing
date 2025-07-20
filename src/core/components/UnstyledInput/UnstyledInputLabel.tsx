import type { MergeProps, InputVariant, InputSize, Gap } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledInputLabelProps } from './UnstyledInput.types';

type Props = MergeProps<
  UnstyledInputLabelProps,
  {
    inputType: 'input' | 'textarea';
    inputVariant: InputVariant;
    inputSize: InputSize;
    gap: Gap;
  }
>;

export const UnstyledInputLabel = ({
  inputType,
  inputVariant,
  inputSize,
  gap,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('inputLabel', className, {
    inputType,
    inputVariant,
    inputSize,
    gap
  });

  return (
    <label
      className={mergedClassName}
      {...restProps}
    />
  );
};
