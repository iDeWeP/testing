import type { RefObject } from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { setProp } from '../../../utils/utils/set-prop/set-prop';
import { useFocusHandler } from '../../hooks/use-focus-handler/use-focus-handler';
import { useTheme } from '../../hooks/use-theme/use-theme';
import type {
  MergeComponentProps,
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
    focused: boolean;
    shifted: boolean;
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    size: InputSize;
    resize: boolean;
    margin: Margin;
    m: Margin;
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
  focused,
  shifted,
  valid,
  invalid,
  disabled,
  size: inputSize,
  resize,
  margin,
  m,
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
  const theme = useTheme();

  const mergedClassName = mergeClassName('unstyledInputContainer', className, {
    inputType,
    theme,
    focused,
    shifted,
    valid,
    invalid,
    disabled,
    inputSize,
    resize,
    margin,
    m,
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
