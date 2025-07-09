import type { MergeComponentProps, Theme, InputVariant } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'fieldset',
  {
    theme: Theme;
    disabled: boolean;
    variant: InputVariant;
  }
>;

export const UnstyledInputFieldset = ({
  theme,
  disabled,
  variant: inputVariant,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputFieldset', className, {
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
