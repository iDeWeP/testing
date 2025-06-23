import type { MergeComponentProps, InputVariant } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'fieldset',
  {
    disabled: boolean;
    variant: InputVariant;
    labeled: boolean;
  }
>;

export const UnstyledInputFieldSet = ({
  disabled,
  variant: inputVariant,
  labeled,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputFieldSet', className, {
    disabled,
    inputVariant,
    labeled
  });

  return (
    <fieldset
      className={mergedClassName}
      {...restProps}
    />
  );
};
