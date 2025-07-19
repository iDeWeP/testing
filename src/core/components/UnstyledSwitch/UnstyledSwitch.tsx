import { useTheme } from "../../hooks/use-theme/use-theme";
import { mergeClassName } from "../../utils/merge-class-name/merge-class-name";
import { mergeProps } from "../../utils/merge-props/merge-props";
import { setAria } from "../../utils/set-aria/set-aria";
import type { UnstyledSwitchProps } from "./UnstyledSwitch.types";
import { unstyledSwitchConfig } from "./unstyledSwitchConfig";




export const UnstyledSwitch = (props: UnstyledSwitchProps) => {
  const {
    disabled = false,
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
    b,
    bx,
    by,
    bt,
    bb,
    bl,
    br,
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
    children,
    ...restProps
  } = mergeProps(unstyledSwitchConfig.props, props);

  const theme = useTheme();

  const mergedClassName = mergeClassName('switch', className);

  return (
    <UnstyledSwitchContainer
      theme={theme}
      variant={variant}
      size={size}
      margin={margin}
      m={m}
      mx={mx}
      my={my}
      mt={mt}
      mb={mb}
      ml={ml}
      mr={mr}
      border={border}
      b={b}
      bx={bx}
      by={by}
      bt={bt}
      bb={bb}
      bl={bl}
      br={br}
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
      {...componentsProps.container}
    >
      <input
        disabled={disabled}
        className={mergedClassName}
        type="checkbox"
        {...setAria('switch')}
        {...restProps}
      >
        <UnstyledSwitchIcon {...componentsProps.icon}/>
      </UnstyledSwitchBar>
    </UnstyledSwitchContainer>
  );
};
