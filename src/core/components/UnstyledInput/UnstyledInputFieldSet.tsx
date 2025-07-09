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
    theme: Theme;
    inputType: 'input' | 'textarea';
    disabled: boolean;
    variant: InputVariant;
    color: Color;
  }
>;

export const UnstyledInputFieldset = ({
  theme,
  inputType,
  disabled,
  variant: inputVariant,
  color,
  className,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputFieldset', className, {
    theme,
    inputType,
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
