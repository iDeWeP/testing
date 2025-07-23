import type { ReactNode } from 'react';
import { getCheckableVariants } from '../../utils/get-checkable-variants/get-checkable-variants';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import { setProps } from '../../utils/set-props/set-props';
import { setRippleVariant } from '../../utils/set-ripple-variant/set-ripple-variant';
import type { UnstyledSwitchProps } from './UnstyledSwitch.types';
import { UnstyledSwitchBar } from './UnstyledSwitchBar';
import { unstyledSwitchConfig } from './unstyledSwitchConfig';
import { UnstyledSwitchContainer } from './UnstyledSwitchContainer';
import { UnstyledSwitchIcon } from './UnstyledSwitchIcon';
import { UnstyledSwitchRipple } from './UnstyledSwitchRipple';
import { UnstyledSwitchTrail } from './UnstyledSwitchTrail';

export const UnstyledSwitch = (props: UnstyledSwitchProps): ReactNode => {
  const {
    valid = false,
    invalid = false,
    disabled = false,
    variant,
    size: defaultSize,
    scale: switchScale,
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
  } = mergeProps(unstyledSwitchConfig.props, props);

  const hasRipple = ripple !== 'none';

  const mergedClassName = mergeClassName('switch', className, {
    disabled,
    defaultSize,
    switchScale,
    decorated: hasRipple
  });

  const [uncheckedVariant, checkedVariant] = getCheckableVariants(variant);

  return (
    <UnstyledSwitchContainer
      defaultSize={defaultSize}
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
        disabled={disabled}
        className={mergedClassName}
        {...setProps('switch')}
        {...setAria('switch')}
        {...restProps}
      />
      <UnstyledSwitchTrail
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        variant={uncheckedVariant}
        defaultSize={defaultSize}
        switchScale={switchScale}
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
        decorated={hasRipple}
      />
      <UnstyledSwitchBar
        valid={valid}
        invalid={invalid}
        disabled={disabled}
        variant={checkedVariant}
        defaultSize={defaultSize}
        switchScale={switchScale}
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
        decorated={hasRipple}
      />
      <UnstyledSwitchIcon
        disabled={disabled}
        variant={checkedVariant}
        defaultSize={defaultSize}
        switchScale={switchScale}
        color={color}
        decorated={hasRipple}
        {...componentsProps.icon}
      >
        {children}
      </UnstyledSwitchIcon>
      {hasRipple && !disabled && (
        <UnstyledSwitchRipple
          valid={valid}
          invalid={invalid}
          variant={setRippleVariant(checkedVariant)}
          defaultSize={defaultSize}
          switchScale={switchScale}
          color={color}
          effect={ripple}
          {...componentsProps.ripple}
        />
      )}
    </UnstyledSwitchContainer>
  );
};
