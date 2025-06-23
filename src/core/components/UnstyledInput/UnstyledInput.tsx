import { useRef } from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { mergeRefs } from '../../../utils/utils/merge-refs/merge-refs';
import { setProp } from '../../../utils/utils/set-prop/set-prop';
import { useControlledState } from '../../hooks/use-controlled-state/use-controlled-state';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import type { UnstyledInputProps } from './UnstyledInput.types';
import { UnstyledInputClearance } from './UnstyledInputClearance';
import { unstyledInputConfig } from './unstyledInputConfig';
import { UnstyledInputContainer } from './UnstyledInputContainer';
import { UnstyledInputDecorator } from './UnstyledInputDecorator';
import { UnstyledInputFieldSet } from './UnstyledInputFieldSet';
import { UnstyledInputLabel } from './UnstyledInputLabel';

export const UnstyledInput = (props: UnstyledInputProps) => {
  const {
    ref: forwardedRef,
    inputRef,
    focused,
    shifted,
    valid,
    invalid,
    disabled,
    id,
    value,
    placeholder,
    variant,
    size,
    scale,
    margin,
    radius,
    color,
    className,
    onFocus,
    onBlur,
    componentsProps,
    label,
    leftDecorator,
    rightDecorator,
    ...restProps
  } = mergeProps(unstyledInputConfig.props, props);

  const ref = useRef<HTMLInputElement>(null);

  const {
    isOpen: isFocused,
    handleOpen: handleFocus,
    handleClose: handleBlur
  } = useControlledState(false, focused);

  const mergedClassName = mergeClassName('unstyledInput', className, {
    disabled
  });

  return (
    <UnstyledInputContainer
      ref={forwardedRef}
      inputRef={setProp(focused === undefined, ref)}
      focused={isFocused}
      shifted={shifted ?? (!!label && (isFocused || !!value))}
      valid={valid}
      invalid={invalid}
      disabled={disabled}
      variant={variant}
      size={size}
      scale={scale}
      margin={margin}
      color={color}
      {...componentsProps.container}
    >
      <UnstyledInputDecorator
        disabled={disabled}
        variant={variant}
        placement="left"
        radius={radius}
        {...componentsProps.leftDecorator}
      >
        {leftDecorator}
      </UnstyledInputDecorator>
      <UnstyledInputFieldSet
        disabled={disabled}
        variant={variant}
        labeled={!!label}
        {...componentsProps.fieldset}
      >
        <input
          ref={mergeRefs(inputRef, ref)}
          disabled={disabled}
          id={id}
          value={value}
          placeholder={setProp(isFocused, placeholder)}
          type="text"
          className={mergedClassName}
          aria-invalid={invalid}
          onFocus={combineHandlers(onFocus, handleFocus)}
          onBlur={combineHandlers(onBlur, handleBlur)}
          {...restProps}
        />
        {label && (variant === 'outlined' || variant === 'outlined-plain') && (
          <UnstyledInputClearance {...componentsProps.clearance}>
            {label}
          </UnstyledInputClearance>
        )}
        {label && (
          <UnstyledInputLabel
            variant={variant}
            size={size}
            htmlFor={id}
            {...componentsProps.label}
          >
            {label}
          </UnstyledInputLabel>
        )}
      </UnstyledInputFieldSet>
      <UnstyledInputDecorator
        disabled={disabled}
        variant={variant}
        placement="right"
        radius={radius}
        {...componentsProps.rightDecorator}
      >
        {rightDecorator}
      </UnstyledInputDecorator>
    </UnstyledInputContainer>
  );
};
