import type { ComponentPropsWithRef } from 'react';
import type {
  Radius,
  ComponentRefProps,
  Border,
  DefaultBorder,
  RippleEffect,
  SVGNodeProps,
  Variant,
  DefaultSize,
  Margin,
  Color,
  Shadow,
  Ripple,
  MergeProps
} from '../../types';

export type CheckboxContainerProps = {
  radius?: Radius;
  rt?: Radius;
  rb?: Radius;
  rl?: Radius;
  rr?: Radius;
  rtl?: Radius;
  rtr?: Radius;
  rbl?: Radius;
  rbr?: Radius;
} & ComponentRefProps<'div'>;

export type CheckboxIconProps = Omit<ComponentRefProps<'svg'>, 'by' | 'radius'>;

export type CheckboxTrailProps = {
  border?: Border;
  bx?: DefaultBorder;
  by?: DefaultBorder;
  bt?: DefaultBorder;
  bb?: DefaultBorder;
  bl?: DefaultBorder;
  br?: DefaultBorder;
} & ComponentRefProps<'span'>;

export type CheckboxRippleProps = {
  effect?: RippleEffect;
} & ComponentRefProps<'span'>;

export type CheckboxComponentsProps = {
  container?: CheckboxContainerProps;
  icon?: CheckboxIconProps;
  trail?: CheckboxTrailProps;
  ripple?: CheckboxRippleProps;
};

export type CheckboxOptionalProps = {
  checked?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  children?: SVGNodeProps;
};

export type CheckboxDefaultProps = {
  variant?: Variant;
  size?: DefaultSize;
  margin?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  border?: Border;
  bx?: DefaultBorder;
  by?: DefaultBorder;
  bt?: DefaultBorder;
  bb?: DefaultBorder;
  bl?: DefaultBorder;
  br?: DefaultBorder;
  radius?: Radius;
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
  componentsProps?: CheckboxComponentsProps;
  ripple?: Ripple;
};

export type CheckboxConfigProps = CheckboxDefaultProps;

export type CheckboxProps = MergeProps<
  ComponentPropsWithRef<'input'>,
  CheckboxDefaultProps & CheckboxOptionalProps
>;
