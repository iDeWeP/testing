import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { UnstyledRipple } from '../UnstyledRipple/UnstyledRipple';
import type { UnstyledCheckboxProps } from './UnstyledCheckbox.types';
import { unstyledCheckboxConfig } from './unstyledCheckboxConfig';
import { UnstyledCheckboxContainer } from './UnstyledCheckboxContainer';
import { UnstyledCheckboxIcon } from './UnstyledCheckboxIcon';
import { UnstyledCheckboxTrail } from './UnstyledCheckboxTrail';

export const UnstyledCheckbox = (props: UnstyledCheckboxProps) => {
  const {
    ref: forwardedRef,
    inputRef,
    checked = false,
    valid = false,
    invalid = false,
    disabled = false,
    type,
    variant,
    size,
    margin,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    border,
    bx,
    by,
    bt,
    bb,
    bl,
    br,
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
    shadow,
    className,
    componentsProps,
    ripple,
    children,
    ...restProps
  } = mergeProps(unstyledCheckboxConfig.props, props);

  const mergedClassName = mergeClassName('unstyledCheckbox', className, {
    disabled
  });

  return (
    <UnstyledCheckboxContainer
      ref={forwardedRef}
      size={size}
      hasRipple={ripple !== 'none'}
      margin={margin}
      mx={mx}
      my={my}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      radius={radius}
      rt={rt}
      rb={rb}
      rl={rl}
      rr={rr}
      rtl={rtl}
      rtr={rtr}
      rbl={rbl}
      rbr={rbr}
      {...componentsProps.container}
    >
      <input
        ref={inputRef}
        checked={checked}
        disabled={disabled}
        type={type}
        className={mergedClassName}
        {...restProps}
      />
      {ripple !== 'none' && !disabled && (
        <UnstyledRipple
          valid={valid}
          invalid={invalid}
          stateful
          variant={variant}
          placement='normal'
          color={color}
          effect={ripple}
          {...componentsProps.ripple}
        />
      )}
      <UnstyledCheckboxTrail
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        size={size}
        radius={radius}
        rt={rt}
        rb={rb}
        rl={rl}
        rr={rr}
        rtl={rtl}
        rtr={rtr}
        rbl={rbl}
        rbr={rbr}
        shadow={shadow}
        {...componentsProps.trail}
      />
      <UnstyledCheckboxIcon
        inputType={type}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        variant={variant}
        size={size}
        border={border}
        bx={bx}
        by={by}
        bt={bt}
        bb={bb}
        bl={bl}
        br={br}
        radius={radius}
        rt={rt}
        rb={rb}
        rl={rl}
        rr={rr}
        rtl={rtl}
        rtr={rtr}
        rbl={rbl}
        rbr={rbr}
        color={color}
        shadow={shadow}
        {...componentsProps.icon}
      >
        {children}
      </UnstyledCheckboxIcon>
    </UnstyledCheckboxContainer>
  );
};
