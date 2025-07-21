import type { ComponentPropsWithRef } from 'react';
import type {
  Radius,
  ComponentRefProps,
  DefaultBorder,
  SVGNodeProps,
  Variant,
  DefaultSize,
  SwitchScale,
  Margin,
  Border,
  Color,
  Shadow,
  Ripple,
  MergeProps
} from '../../types';

export type UnstyledSwitchContainerProps = {
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
} & ComponentRefProps<'div'>;

export type UnstyledSwitchBarProps = ComponentRefProps<'span'>;

export type UnstyledSwitchTrailProps = {
  border?: DefaultBorder;
} & ComponentRefProps<'span'>;

export type UnstyledSwitchIconProps = ComponentRefProps<'svg'>;

export type UnstyledSwitchRippleProps = ComponentRefProps<'span'>;

export type UnstyledSwitchComponentsProps = {
  container?: UnstyledSwitchContainerProps;
  bar?: UnstyledSwitchBarProps;
  trail?: UnstyledSwitchTrailProps;
  icon?: UnstyledSwitchIconProps;
  ripple?: UnstyledSwitchRippleProps;
};

export type UnstyledSwitchOptionalProps = {
  checked?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  children?: SVGNodeProps;
};

export type UnstyledSwitchDefaultProps = {
  variant?: Variant;
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

export type UnstyledSwitchConfigProps = UnstyledSwitchDefaultProps;

export type UnstyledSwitchProps = MergeProps<
  ComponentPropsWithRef<'input'>,
  UnstyledSwitchDefaultProps & UnstyledSwitchOptionalProps
>;
