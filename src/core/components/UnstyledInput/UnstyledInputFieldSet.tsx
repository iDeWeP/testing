import type { MergeComponentProps, InputVariant } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'fieldset',
  {
    disabled: boolean;
    variant: InputVariant;
    decorated: boolean;
  }
>;

export const UnstyledInputFieldSet = ({
  disabled,
  variant: inputVariant,
  decorated,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputFieldSet', className, {
    disabled,
    inputVariant,
    decorated
  });

  return (
    <fieldset
      className={mergedClassName}
      {...restProps}
    />
  );
};
