import { type ElementType, useRef } from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { mergeRefs } from '../../../utils/utils/merge-refs/merge-refs';
import { setProp } from '../../../utils/utils/set-prop/set-prop';
import { useControlledState } from '../../hooks/use-controlled-state/use-controlled-state';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import type { UnstyledInputProps } from './UnstyledInput.types';
import { UnstyledInputClearance } from './UnstyledInputClearance';
import { unstyledInputConfig } from './unstyledInputConfig';
import { UnstyledInputContainer } from './UnstyledInputContainer';
import { UnstyledInputDecorator } from './UnstyledInputDecorator';
import { UnstyledInputFieldset } from './UnstyledInputFieldset';
import { UnstyledInputLabel } from './UnstyledInputLabel';

export const UnstyledInput = <E extends ElementType>(
  props: UnstyledInputProps<E>
) => {
  const {
    as: Component,
    ref: forwardedRef,
    focused,
    shifted,
    valid = false,
    invalid = false,
    disabled = false,
    id,
    value,
    placeholder,
    variant,
    size: inputSize,
    resize,
    margin,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    radius,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
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

  const ref = useRef(null);

  const {
    isOpen: isFocused,
    handleOpen: handleFocus,
    handleClose: handleBlur
  } = useControlledState(false, focused, onFocus, onBlur);

  const mergedClassName = mergeClassName('unstyledInput', className, {
    inputType: Component,
    disabled,
    inputSize,
    resize
  });

  return (
    <UnstyledInputContainer
      inputType={Component}
      inputRef={setProp(focused === undefined, ref)}
      focused={isFocused}
      shifted={shifted ?? (!!label && (isFocused || !!value))}
      valid={valid}
      invalid={invalid}
      disabled={disabled}
      size={inputSize}
      resize={resize}
      margin={margin}
      mx={mx}
      my={my}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      color={color}
      {...componentsProps.container}
    >
      <UnstyledInputDecorator
        inputType={Component}
        disabled={disabled}
        variant={variant}
        placement="left"
        radius={radius}
        rt={rt}
        rb={rb}
        rl={rl}
        rr={rr}
        rtl={rtl}
        rtr={rtr}
        rbl={rbl}
        rbr={rbr}
        {...componentsProps.leftDecorator}
      >
        {leftDecorator}
      </UnstyledInputDecorator>
      <UnstyledInputFieldset
        inputType={Component}
        disabled={disabled}
        variant={variant}
        {...componentsProps.fieldset}
      >
        <Component
          ref={mergeRefs(forwardedRef, ref)}
          disabled={disabled}
          id={id}
          value={value}
          placeholder={setProp(isFocused, placeholder)}
          type="text"
          className={mergedClassName}
          {...setAria('input', { isInvalid: invalid })}
          onFocus={combineHandlers(onFocus, handleFocus)}
          onBlur={combineHandlers(onBlur, handleBlur)}
          {...restProps}
        />
        {label && variant === 'outlined' && (
          <UnstyledInputClearance {...componentsProps.clearance}>
            {label}
          </UnstyledInputClearance>
        )}
        {label && (
          <UnstyledInputLabel
            inputType={Component}
            variant={variant}
            size={inputSize}
            htmlFor={id}
            {...componentsProps.label}
          >
            {label}
          </UnstyledInputLabel>
        )}
      </UnstyledInputFieldset>
      <UnstyledInputDecorator
        inputType={Component}
        disabled={disabled}
        variant={variant}
        placement="right"
        radius={radius}
        rt={rt}
        rb={rb}
        rl={rl}
        rr={rr}
        rtl={rtl}
        rtr={rtr}
        rbl={rbl}
        rbr={rbr}
        {...componentsProps.rightDecorator}
      >
        {rightDecorator}
      </UnstyledInputDecorator>
    </UnstyledInputContainer>
  );
};
