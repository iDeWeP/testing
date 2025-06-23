import type { MergeComponentProps, InputVariant, InputSize } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'label',
  {
    variant: InputVariant;
    size: InputSize;
  }
>;

export const UnstyledInputLabel = ({
  variant: inputVariant,
  size: inputSize,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputLabel', className, {
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
