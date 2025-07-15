import type {
  MergeComponentProps,
  InputVariant,
  InputSize,
  Gap
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'label',
  {
    inputType: 'input' | 'textarea';
    variant: InputVariant;
    size: InputSize;
    gap: Gap;
  }
>;

export const UnstyledInputLabel = ({
  inputType,
  variant: inputVariant,
  size: inputSize,
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
