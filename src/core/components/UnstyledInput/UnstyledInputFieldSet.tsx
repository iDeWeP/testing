import { useTheme } from '../../hooks/use-theme/use-theme';
import type { MergeProps, InputVariant } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledInputFieldsetProps } from './UnstyledInput.types';

type Props = MergeProps<
  UnstyledInputFieldsetProps,
  {
    inputType: 'input' | 'textarea';
    disabled: boolean;
    inputVariant: InputVariant;
  }
>;

export const UnstyledInputFieldset = ({
  inputType,
  disabled,
  inputVariant,
  className,
  ...restProps
}: Props) => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('inputFieldset', className, {
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
