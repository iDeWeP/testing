import type { ComponentPropsWithRef } from 'react';
import type {
  ComponentRefProps,
  MergeProps,
  Radius,
  Border,
  SVGNodeProps,
  CheckableVariant,
  DefaultSize,
  SwitchScale,
  Margin,
  Color,
  Shadow,
  Ripple
} from '../../types';

export type UnstyledSwitchIconProps = ComponentRefProps<'svg'>;
export type UnstyledSwitchRippleProps = ComponentRefProps<'span'>;
export type UnstyledSwitchBarProps = ComponentRefProps<'span'>;

export type UnstyledSwitchContainerProps = MergeProps<
  ComponentRefProps<'div'>,
  {
    radius?: Radius;
    r?: Radius;
    rt?: Radius;
    rb?: Radius;
    rl?: Radius;
    rr?: Radius;
    rtl?: Radius;
    rtr?: Radius;
    rbl?: Radius;
    rbr?: Radius;
  }
>;

export type UnstyledSwitchTrailProps = MergeProps<
  ComponentRefProps<'span'>,
  {
    border?: Border;
  }
>;

export type UnstyledSwitchComponentsProps = {
  container?: UnstyledSwitchContainerProps;
  bar?: UnstyledSwitchBarProps;
  trail?: UnstyledSwitchTrailProps;
  icon?: UnstyledSwitchIconProps;
  ripple?: UnstyledSwitchRippleProps;
};

type OptionalProps = {
  checked?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  children?: SVGNodeProps;
};

type DefaultProps = {
  variant?: CheckableVariant;
  size?: DefaultSize;
  scale?: SwitchScale;
  margin?: Margin;
  m?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  border?: Border;
  radius?: Radius;
  r?: Radius;
  rt?: Radius;
  rb?: Radius;
  rl?: Radius;
  rr?: Radius;
  rtl?: Radius;
  rtr?: Radius;
  rbl?: Radius;
  rbr?: Radius;
  color?: Color;
  shadow?: Shadow;
  componentsProps?: UnstyledSwitchComponentsProps;
  ripple?: Ripple;
};

export type UnstyledSwitchConfigProps = DefaultProps;

export type UnstyledSwitchProps = MergeProps<
  ComponentPropsWithRef<'input'>,
  DefaultProps & OptionalProps
>;
