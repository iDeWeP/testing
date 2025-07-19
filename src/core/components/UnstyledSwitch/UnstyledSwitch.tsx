import { useTheme } from '../../hooks/use-theme/use-theme';
import { mergeClassName } from '../../utils/merge-class-name/merge-class-name';
import { mergeProps } from '../../utils/merge-props/merge-props';
import { setAria } from '../../utils/set-aria/set-aria';
import type { UnstyledSwitchProps } from './UnstyledSwitch.types';
import { unstyledSwitchConfig } from './unstyledSwitchConfig';
import { UnstyledSwitchContainer } from './UnstyledSwitchContainer';
import { UnstyledSwitchIcon } from './UnstyledSwitchIcon';

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

  const mergedClassName = mergeClassName('switch', className, {
    theme,
    disabled,
    variant,
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
    shadow
  });

  return (
    <UnstyledSwitchContainer
      size={size}
      {...componentsProps.container}
    >
      <input
        disabled={disabled}
        className={mergedClassName}
        type="checkbox"
        {...setAria('switch')}
        {...restProps}
      />
      <UnstyledSwitchIcon
        theme={theme}
        disabled={disabled}
        variant={variant}
        color={color}
        {...componentsProps.icon}
      >
        {children}
      </UnstyledSwitchIcon>
    </UnstyledSwitchContainer>
  );
};
