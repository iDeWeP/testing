import type { ComponentPropsWithRef } from 'react';
import type {
  Radius,
  ComponentRefProps,
  DefaultBorder,
  SVGNodeProps,
  Variant,
  DefaultSize,
  Margin,
  Border,
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
  'radius' | 'r'
>;

export type UnstyledCheckboxTrailProps = {
  border?: DefaultBorder;
} & ComponentRefProps<'span'>;

export type UnstyledCheckboxRippleProps = ComponentRefProps<'span'>;

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
