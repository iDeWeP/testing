import { useTheme } from '../../hooks/use-theme/use-theme';
import type { MergeProps, InputVariant, Color } from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledInputFieldsetProps } from './UnstyledInput.types';

type Props = MergeProps<
  UnstyledInputFieldsetProps,
  {
    inputType: 'input' | 'textarea';
    on: boolean;
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    inputVariant: InputVariant;
    color: Color;
  }
>;

export const UnstyledInputFieldset = ({
  inputType,
  on,
  valid,
  invalid,
  disabled,
  inputVariant,
  color,
  className,
  ...restProps
}: Props) => {
  const theme = useTheme();

  const mergedClassName = mergeClassName('inputFieldset', className, {
    inputType,
    theme,
    on,
    valid,
    invalid,
    disabled,
    inputVariant,
    color
  });

  return (
    <fieldset
      className={mergedClassName}
      {...restProps}
    />
  );
};
