import { useRef } from 'react';
import { combineHandlers } from '../../../utils/utils/combine-handlers/combine-handlers';
import { mergeRefs } from '../../../utils/utils/merge-refs/merge-refs';
import { setProp } from '../../../utils/utils/set-prop/set-prop';
import { useControlledState } from '../../hooks/use-controlled-state/use-controlled-state';
import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import type { UnstyledInputProps } from './UnstyledInput.types';
import { UnstyledInputClearance } from './UnstyledInputClearance';
import { unstyledInputConfig } from './unstyledInputConfig';
import { UnstyledInputContainer } from './UnstyledInputContainer';
import { UnstyledInputDecorator } from './UnstyledInputDecorator';
import { UnstyledInputFieldset } from './UnstyledInputFieldset';
import { UnstyledInputLabel } from './UnstyledInputLabel';

export const UnstyledInput = (props: UnstyledInputProps) => {
  const {
    ref: forwardedRef,
    inputRef,
    focused,
    shifted,
    valid = false,
    invalid = false,
    disabled = false,
    id,
    value,
    placeholder,
    variant,
    size,
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

  const theme = useTheme();

  const ref = useRef<HTMLInputElement>(null);

  const {
    isOpen: isFocused,
    handleOpen: handleFocus,
    handleClose: handleBlur
  } = useControlledState(false, focused, onFocus, onBlur);

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
      size={size}
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
        theme={theme}
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
        theme={theme}
        disabled={disabled}
        variant={variant}
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
        {label && variant === 'outlined' && (
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
      </UnstyledInputFieldset>
      <UnstyledInputDecorator
        theme={theme}
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
