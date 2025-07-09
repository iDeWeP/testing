import type {
  MergeComponentProps,
  Theme,
  InputVariant,
  Color
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'fieldset',
  {
    inputType: 'input' | 'textarea';
    theme: Theme;
    disabled: boolean;
    variant: InputVariant;
    color: Color;
  }
>;

export const UnstyledInputFieldset = ({
  inputType,
  theme,
  disabled,
  variant: inputVariant,
  color,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputFieldset', className, {
    inputType,
    theme,
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
