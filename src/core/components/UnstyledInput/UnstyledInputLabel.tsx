import type { MergeComponentProps, InputVariant, InputSize } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'label',
  {
    inputType: 'input' | 'textarea';
    variant: InputVariant;
    size: InputSize;
  }
>;

export const UnstyledInputLabel = ({
  inputType,
  variant: inputVariant,
  size: inputSize,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputLabel', className, {
    inputType,
    inputVariant,
    inputSize
  });

  return (
    <label
      className={mergedClassName}
      {...restProps}
    />
  );
};
