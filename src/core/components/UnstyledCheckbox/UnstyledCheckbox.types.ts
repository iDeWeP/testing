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

export type UnstyledCheckboxContainerProps = {
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

export type UnstyledCheckboxIconProps = Omit<
  ComponentRefProps<'svg'>,
  'by' | 'radius' | 'r'
>;

export type UnstyledCheckboxTrailProps = {
  border?: Border;
  b?: DefaultBorder;
  bx?: DefaultBorder;
  by?: DefaultBorder;
  bt?: DefaultBorder;
  bb?: DefaultBorder;
  bl?: DefaultBorder;
  br?: DefaultBorder;
} & ComponentRefProps<'span'>;

export type UnstyledCheckboxRippleProps = {
  effect?: RippleEffect;
} & ComponentRefProps<'span'>;

export type UnstyledCheckboxComponentsProps = {
  container?: UnstyledCheckboxContainerProps;
  icon?: UnstyledCheckboxIconProps;
  trail?: UnstyledCheckboxTrailProps;
  ripple?: UnstyledCheckboxRippleProps;
};

export type UnstyledCheckboxOptionalProps = {
  checked?: boolean;
  valid?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  children?: SVGNodeProps;
};

export type UnstyledCheckboxDefaultProps = {
  variant?: Variant;
  size?: DefaultSize;
  margin?: Margin;
  m?: Margin;
  mx?: Margin;
  my?: Margin;
  mt?: Margin;
  mb?: Margin;
  ml?: Margin;
  mr?: Margin;
  border?: Border;
  b?: DefaultBorder;
  bx?: DefaultBorder;
  by?: DefaultBorder;
  bt?: DefaultBorder;
  bb?: DefaultBorder;
  bl?: DefaultBorder;
  br?: DefaultBorder;
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
  componentsProps?: UnstyledCheckboxComponentsProps;
  ripple?: Ripple;
};

export type UnstyledCheckboxConfigProps = UnstyledCheckboxDefaultProps;

export type UnstyledCheckboxProps = MergeProps<
  ComponentPropsWithRef<'input'>,
  UnstyledCheckboxDefaultProps & UnstyledCheckboxOptionalProps
>;
