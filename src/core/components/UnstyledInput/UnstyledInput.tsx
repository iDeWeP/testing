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
    width,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    radius,
    r,
    rt,
    rb,
    rl,
    rr,
    rtl,
    rtr,
    rbl,
    rbr,
    color,
    gap,
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

  const mergedClassName = mergeClassName('input', className, {
    inputType: Component,
    disabled,
    inputSize,
    resize
  });

  return (
    <UnstyledInputContainer
      inputType={Component}
      inputRef={setProp(focused === undefined, ref)}
      on={isFocused}
      valid={valid}
      invalid={invalid}
      disabled={disabled}
      inputSize={inputSize}
      resize={resize}
      width={width}
      margin={margin}
      m={m}
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
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        inputVariant={variant}
        sidePlacement="left"
        radius={radius}
        r={r}
        rt={rt}
        rb={rb}
        rl={rl}
        rr={rr}
        rtl={rtl}
        rtr={rtr}
        rbl={rbl}
        rbr={rbr}
        color={color}
        gap={gap}
        {...componentsProps.leftDecorator}
      >
        {leftDecorator}
      </UnstyledInputDecorator>
      <UnstyledInputFieldset
        inputType={Component}
        on={shifted ?? (!!label && (isFocused || !!value))}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        inputVariant={variant}
        color={color}
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
          {...setAria('input', { invalid })}
          onFocus={combineHandlers(onFocus, handleFocus)}
          onBlur={combineHandlers(onBlur, handleBlur)}
          {...restProps}
        />
        {label && variant === 'outlined' && (
          <UnstyledInputClearance
            gap={gap}
            {...componentsProps.clearance}
          >
            {label}
          </UnstyledInputClearance>
        )}
        {label && (
          <UnstyledInputLabel
            inputType={Component}
            htmlFor={id}
            inputVariant={variant}
            inputSize={inputSize}
            gap={gap}
            {...componentsProps.label}
          >
            {label}
          </UnstyledInputLabel>
        )}
      </UnstyledInputFieldset>
      <UnstyledInputDecorator
        inputType={Component}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        inputVariant={variant}
        sidePlacement="right"
        radius={radius}
        r={r}
        rt={rt}
        rb={rb}
        rl={rl}
        rr={rr}
        rtl={rtl}
        rtr={rtr}
        rbl={rbl}
        rbr={rbr}
        color={color}
        gap={gap}
        {...componentsProps.rightDecorator}
      >
        {rightDecorator}
      </UnstyledInputDecorator>
    </UnstyledInputContainer>
  );
};
