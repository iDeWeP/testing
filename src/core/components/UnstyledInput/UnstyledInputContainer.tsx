import type { RefObject, ReactNode } from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { setValue } from '../../../utils/utils/set-value/set-value';
import { useFocusHandler } from '../../hooks/use-focus-handler/use-focus-handler';
import { useTheme } from '../../hooks/use-theme/use-theme';
import type {
  MergeProps,
  InputSize,
  Width,
  Margin,
  Color,
  Ring
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import type { UnstyledInputContainerProps } from './UnstyledInput.types';

type Props = MergeProps<
  UnstyledInputContainerProps,
  {
    inputType: 'input' | 'textarea';
    inputRef?: RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
    on: boolean;
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    inputSize: InputSize;
    resize: boolean;
    width: Width;
    margin: Margin;
    m: Margin;
    mx: Margin;
    my: Margin;
    mt: Margin;
    mb: Margin;
    ml: Margin;
    mr: Margin;
    color: Color;
    ring: Ring;
  }
>;

export const UnstyledInputContainer = ({
  inputType,
  inputRef,
  on,
  valid,
  invalid,
  disabled,
  inputSize,
  resize,
  width,
  margin,
  m,
  mx,
  my,
  mt,
  mb,
  ml,
  mr,
  color,
  ring,
  className,
  onFocus,
  ...restProps
}: Props): ReactNode => {
  const theme = useTheme();

  const handleFocus = useFocusHandler(inputRef);

  const mergedClassName = mergeClassName('inputContainer', className, {
    inputType,
    theme,
    on,
    valid,
    invalid,
    disabled,
    inputSize,
    resize,
    width,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    color,
    ring
  });

  return (
    <div
      tabIndex={setValue(!disabled, -1)}
      className={mergedClassName}
      onFocus={combineHandlers(onFocus, handleFocus)}
      {...restProps}
    />
  );
};
