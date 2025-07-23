import type { ReactNode } from 'react';
import { getCheckableVariants } from '../../utils/get-checkable-variants/get-checkable-variants';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setRippleVariant } from '../../utils/set-ripple-variant/set-ripple-variant';
import { UnstyledRipple } from '../UnstyledRipple/UnstyledRipple';
import type { UnstyledCheckboxProps } from './UnstyledCheckbox.types';
import { unstyledCheckboxConfig } from './unstyledCheckboxConfig';
import { UnstyledCheckboxContainer } from './UnstyledCheckboxContainer';
import { UnstyledCheckboxIcon } from './UnstyledCheckboxIcon';
import { UnstyledCheckboxTrail } from './UnstyledCheckboxTrail';

export const UnstyledCheckbox = (props: UnstyledCheckboxProps): ReactNode => {
  const {
    checked = false,
    valid = false,
    invalid = false,
    disabled = false,
    type = 'checkbox',
    variant,
    size,
    margin,
    m,
    mx,
    my,
    mt,
    mb,
    ml,
    mr,
    border,
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
    shadow,
    className,
    componentsProps,
    ripple,
    children,
    ...restProps
  } = mergeProps(unstyledCheckboxConfig.props, props);

  const mergedClassName = mergeClassName('checkbox', className, {
    disabled
  });

  const [uncheckedVariant, checkedVariant] = getCheckableVariants(variant);
  const hasRipple = ripple !== 'none';

  return (
    <UnstyledCheckboxContainer
      defaultSize={size}
      margin={margin}
      m={m}
      mx={mx}
      my={my}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      decorated={hasRipple}
      {...componentsProps.container}
    >
      <input
        checked={checked}
        disabled={disabled}
        type={type}
        className={mergedClassName}
        {...restProps}
      />
      <UnstyledCheckboxTrail
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        variant={uncheckedVariant}
        defaultSize={size}
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
        shadow={shadow}
        {...componentsProps.trail}
      />
      <UnstyledCheckboxIcon
        inputType={type}
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        variant={checkedVariant}
        defaultSize={size}
        border={border}
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
        shadow={shadow}
        {...componentsProps.icon}
      >
        {children}
      </UnstyledCheckboxIcon>
      {hasRipple && !disabled && (
        <UnstyledRipple
          valid={valid}
          invalid={invalid}
          stateful
          variant={setRippleVariant(checkedVariant)}
          scale="peer"
          color={color}
          effect={ripple}
          {...componentsProps.ripple}
        />
      )}
    </UnstyledCheckboxContainer>
  );
};
