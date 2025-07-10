import type { MergeComponentProps, Theme, InputVariant } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'fieldset',
  {
    inputType: 'input' | 'textarea';
    theme: Theme;
    disabled: boolean;
    variant: InputVariant;
  }
>;

export const UnstyledInputFieldset = ({
  inputType,
  theme,
  disabled,
  variant: inputVariant,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputFieldset', className, {
    inputType,
    theme,
    disabled,
    inputVariant
  });

  return (
    <fieldset
      className={mergedClassName}
      {...restProps}
    />
  );
};
