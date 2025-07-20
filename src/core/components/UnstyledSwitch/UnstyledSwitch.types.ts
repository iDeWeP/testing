import type { ComponentPropsWithRef } from 'react';
import type {
  ComponentRefProps,
  SVGNodeProps,
  Variant,
  Size,
  InnerScale,
  Margin,
  Border,
  DefaultBorder,
  Radius,
  Color,
  Shadow,
  MergeProps
} from '../../types';

export type UnstyledSwitchContainerProps = ComponentRefProps<'div'>;
export type UnstyledSwitchIconProps = ComponentRefProps<'svg'>;

export type UnstyledSwitchComponentsProps = {
  container?: UnstyledSwitchContainerProps;
  icon?: UnstyledSwitchIconProps;
};

export type UnstyledSwitchOptionalProps = {
  checked?: boolean;
  disabled?: boolean;
  children?: SVGNodeProps;
};

export type UnstyledSwitchDefaultProps = {
  variant?: Variant;
  size?: Size;
  scale?: InnerScale;
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
  ring?: Color;
  componentsProps?: UnstyledSwitchComponentsProps;
};

export type UnstyledSwitchConfigProps = UnstyledSwitchDefaultProps;

export type UnstyledSwitchProps = MergeProps<
  ComponentPropsWithRef<'input'>,
  UnstyledSwitchDefaultProps & UnstyledSwitchOptionalProps
>;
