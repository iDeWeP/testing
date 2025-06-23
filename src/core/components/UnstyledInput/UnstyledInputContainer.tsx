import type { RefObject } from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { setProp } from '../../../utils/utils/set-prop/set-prop';
import { useFocusHandler } from '../../hooks/use-focus-handler/use-focus-handler';
import type {
  MergeComponentProps,
  InputVariant,
  InputSize,
  Scale,
  Margin,
  Color
} from '../../types';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';

type Props = MergeComponentProps<
  'div',
  {
    inputRef?: RefObject<HTMLInputElement | HTMLTextAreaElement | null>;
    focused: boolean;
    shifted: boolean;
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    variant: InputVariant;
    size: InputSize;
    scale: Scale;
    margin: Margin;
    color: Color;
  }
>;

export const UnstyledInputContainer = ({
  ref: forwardedRef,
  inputRef,
  focused,
  shifted,
  valid,
  invalid,
  disabled,
  variant: inputVariant,
  size: inputSize,
  scale,
  margin,
  color,
  className,
  onFocus,
  ...restProps
}: Props) => {
  const mergedClassName = mergeClassName('unstyledInputContainer', className, {
    focused,
    shifted,
    valid,
    invalid,
    disabled,
    inputVariant,
    inputSize,
    scale,
    margin,
    color
  });

  const handleFocus = useFocusHandler(inputRef);

  return (
    <div
      ref={forwardedRef}
      tabIndex={setProp(!disabled, -1)}
      className={mergedClassName}
      onFocus={combineHandlers(onFocus, handleFocus)}
      {...restProps}
    />
  );
};
