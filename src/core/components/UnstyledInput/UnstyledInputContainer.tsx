import type { RefObject } from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { setProp } from '../../../utils/utils/set-prop/set-prop';
import { useFocusHandler } from '../../hooks/use-focus-handler/use-focus-handler';
import type {
  MergeComponentProps,
  Theme,
  InputVariant,
  InputSize,
  Margin,
  Color
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'div',
  {
    inputType: 'input' | 'textarea';
    inputRef?: RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
    theme: Theme;
    focused: boolean;
    shifted: boolean;
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    varaint: InputVariant;
    size: InputSize;
    resize: boolean;
    margin: Margin;
    mx: Margin;
    my: Margin;
    mt: Margin;
    mb: Margin;
    ml: Margin;
    mr: Margin;
    color: Color;
  }
>;

export const UnstyledInputContainer = ({
  inputType,
  inputRef,
  theme,
  focused,
  shifted,
  valid,
  invalid,
  disabled,
  varaint: inputVariant,
  size: inputSize,
  resize,
  margin,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  color,
  className,
  onFocus,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputContainer', className, {
    inputType,
    theme,
    focused,
    shifted,
    valid,
    invalid,
    disabled,
    inputVariant,
    inputSize,
    resize,
    margin,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    color
  });

  const handleFocus = useFocusHandler(inputRef);

  return (
    <div
      tabIndex={setProp(!disabled, -1)}
      className={mergedClassName}
      onFocus={combineHandlers(onFocus, handleFocus)}
      {...restProps}
    />
  );
};
