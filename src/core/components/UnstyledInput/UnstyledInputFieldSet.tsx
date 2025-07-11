import { useTheme } from '../../hooks/use-theme/use-theme';
import type { MergeComponentProps, InputVariant } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'fieldset',
  {
    inputType: 'input' | 'textarea';
    disabled: boolean;
    variant: InputVariant;
  }
>;

export const UnstyledInputFieldset = ({
  inputType,
  disabled,
  variant: inputVariant,
  className,
  ...restProps
}: Props) => {
  const theme = useTheme();

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
